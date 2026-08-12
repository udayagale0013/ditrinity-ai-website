from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import google.generativeai as genai
from dotenv import load_dotenv

import pdfplumber
import docx
import os
import sqlite3
import shutil
import smtplib

from datetime import datetime
from email.message import EmailMessage

from routes.contact import router as contact_router
from routes.chat import router as chat_router
from routes.reviews import router as reviews_router


# =========================================================
# ENVIRONMENT
# =========================================================

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

    model = genai.GenerativeModel("gemini-2.5-flash")
else:
    model = None
    print("WARNING: GEMINI_API_KEY is not configured.", flush=True)


# =========================================================
# FASTAPI
# =========================================================

app = FastAPI(
    title="diTrinity Technologies Backend",
    version="1.0.0"
)


# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ditrinity-ai-website.vercel.app",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
# =========================================================
# ROUTERS
# =========================================================

app.include_router(contact_router)
app.include_router(chat_router)
app.include_router(reviews_router)


# =========================================================
# DATABASE
# =========================================================

DATABASE = "applications.db"

UPLOAD_FOLDER = "uploads/resumes"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def create_database():

    conn = sqlite3.connect(DATABASE)

    cursor = conn.cursor()

    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS applications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            skills TEXT NOT NULL,
            position TEXT NOT NULL,
            resume_filename TEXT NOT NULL,
            resume_path TEXT NOT NULL,
            submitted_at TEXT NOT NULL
        )
        """
    )

    conn.commit()

    conn.close()


create_database()


# =========================================================
# HEALTH CHECK
# =========================================================

@app.get("/")
def root():

    return {
        "success": True,
        "message": "diTrinity Technologies Backend is running."
    }


@app.get("/health")
def health():

    return {
        "success": True,
        "status": "healthy"
    }


# =========================================================
# NORMAL CHATBOT
# =========================================================

class ChatRequest(BaseModel):

    message: str


SYSTEM_PROMPT = """
You are the official AI Assistant of diTrinity Technologies.

About diTrinity Technologies:

- AI Solutions
- Cloud Solutions
- ERP
- PLM
- Digital Transformation
- Data Analytics
- Custom Software Development
- Careers
- Contact Support

Answer the user's questions normally and professionally.

If the user asks about diTrinity Technologies,
give useful information about the company.

If the user asks about careers,
tell them they can visit the Careers page.

If the user asks about contact information:

Email: info@ditrinity.com
Phone: +91 9876543210

Do not pretend to perform actions that you cannot perform.

If you don't know something, politely say that you don't know.
"""


@app.post("/chat")
def chat(data: ChatRequest):

    try:

        if model is None:

            return {
                "reply": "AI service is currently unavailable."
            }

        prompt = (
            SYSTEM_PROMPT
            + "\n\nUser: "
            + data.message
        )

        response = model.generate_content(prompt)

        return {
            "reply": response.text
        }

    except Exception as e:

        print(
            "CHAT ERROR:",
            repr(e),
            flush=True
        )

        return {
            "reply": "Sorry, I am unable to respond right now."
        }


# =========================================================
# RESUME TEXT EXTRACTION
# =========================================================

async def extract_resume_text(resume: UploadFile):

    text = ""

    filename = (resume.filename or "").lower()

    try:

        # -----------------------------------------
        # PDF
        # -----------------------------------------

        if filename.endswith(".pdf"):

            with pdfplumber.open(resume.file) as pdf:

                for page in pdf.pages:

                    page_text = page.extract_text()

                    if page_text:

                        text += page_text + "\n"


        # -----------------------------------------
        # DOCX
        # -----------------------------------------

        elif filename.endswith(".docx"):

            document = docx.Document(resume.file)

            for para in document.paragraphs:

                text += para.text + "\n"


        else:

            return None, "Only PDF and DOCX files are supported."


        return text, None


    except Exception as e:

        print(
            "RESUME TEXT EXTRACTION ERROR:",
            repr(e),
            flush=True
        )

        return None, str(e)


# =========================================================
# RESUME PARSER
# =========================================================

@app.post("/resume-parse")
async def resume_parse(
    resume: UploadFile = File(...)
):

    try:

        if model is None:

            return {
                "error": "AI service is not configured."
            }


        text, error = await extract_resume_text(resume)

        if error:

            return {
                "error": error
            }


        if not text.strip():

            return {
                "error": "Could not extract text from the resume."
            }


        prompt = f"""
You are an AI Resume Parser.

Extract the following details from the resume.

Return ONLY valid JSON.

{{
    "name": "",
    "email": "",
    "phone": "",
    "skills": "",
    "education": "",
    "position": ""
}}

Rules:

- Do not add markdown.
- Do not add ```json.
- Return only JSON.
- If a value is not available, return an empty string.

Resume:

{text}
"""


        response = model.generate_content(prompt)

        return {
            "result": response.text
        }


    except Exception as e:

        print(
            "RESUME PARSE ERROR:",
            repr(e),
            flush=True
        )

        return {
            "error": "Resume parsing failed.",
            "details": str(e)
        }


# =========================================================
# RESUME MATCH SCORE
# =========================================================

@app.post("/resume-score")
async def resume_score(
    resume: UploadFile = File(...)
):

    try:

        if model is None:

            return {
                "error": "AI service is not configured."
            }


        text, error = await extract_resume_text(resume)

        if error:

            return {
                "error": error
            }


        if not text.strip():

            return {
                "error": "Could not extract text from the resume."
            }


        prompt = f"""
You are an AI HR Recruiter.

Analyze this resume.

Return ONLY valid JSON.

{{
    "score": "90%",
    "role": "Full Stack Developer",
    "skills": ["React", "Node.js", "MongoDB", "JavaScript"],
    "missing": ["Docker", "AWS"],
    "suggestion": "Learn Docker and AWS to improve your chances of getting selected."
}}

Rules:

- Score must be between 0% and 100%.
- Identify the likely job role.
- List important skills found.
- List missing or weak skills.
- Give useful suggestions.
- Return only JSON.
- Do not use markdown.

Resume:

{text}
"""


        response = model.generate_content(prompt)

        return {
            "result": response.text
        }


    except Exception as e:

        print(
            "RESUME SCORE ERROR:",
            repr(e),
            flush=True
        )

        return {
            "error": "Resume scoring failed.",
            "details": str(e)
        }


# =========================================================
# APPLY / JOB APPLICATION
# =========================================================

@app.post("/apply")
async def apply(

    name: str = Form(...),

    email: str = Form(...),

    skills: str = Form(...),

    position: str = Form(...),

    resume: UploadFile = File(...)

):

    try:

        print(
            "========================================",
            flush=True
        )

        print(
            "NEW JOB APPLICATION RECEIVED",
            flush=True
        )

        print(
            "Name:",
            name,
            flush=True
        )

        print(
            "Email:",
            email,
            flush=True
        )

        print(
            "Position:",
            position,
            flush=True
        )


        # =================================================
        # CHECK RESUME
        # =================================================

        filename = (
            resume.filename or ""
        ).lower()


        if not (
            filename.endswith(".pdf")
            or filename.endswith(".docx")
        ):

            return {
                "success": False,
                "message": "Only PDF and DOCX resumes are supported."
            }


        # =================================================
        # SAFE FILE NAME
        # =================================================

        safe_filename = os.path.basename(
            resume.filename
        )


        timestamp = datetime.now().strftime(
            "%Y%m%d_%H%M%S_%f"
        )


        saved_filename = (
            f"{timestamp}_{safe_filename}"
        )


        resume_path = os.path.join(
            UPLOAD_FOLDER,
            saved_filename
        )


        # =================================================
        # SAVE RESUME
        # =================================================

        with open(
            resume_path,
            "wb"
        ) as buffer:

            shutil.copyfileobj(
                resume.file,
                buffer
            )


        print(
            "Resume saved:",
            resume_path,
            flush=True
        )


        # =================================================
        # SAVE APPLICATION TO DATABASE
        # =================================================

        conn = sqlite3.connect(
            DATABASE
        )

        cursor = conn.cursor()


        submitted_at = datetime.now().strftime(
            "%Y-%m-%d %H:%M:%S"
        )


        cursor.execute(
            """
            INSERT INTO applications
            (
                name,
                email,
                skills,
                position,
                resume_filename,
                resume_path,
                submitted_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (
                name,
                email,
                skills,
                position,
                safe_filename,
                resume_path,
                submitted_at
            )
        )


        conn.commit()


        application_id = cursor.lastrowid


        conn.close()


        print(
            "Application saved to database. ID:",
            application_id,
            flush=True
        )


        # =================================================
        # SEND EMAIL
        # =================================================

        email_sent = False

        email_error = None


        try:

            gmail_address = os.getenv(
                "GMAIL_USER"
            )

            gmail_password = os.getenv(
                "GMAIL_APP_PASSWORD"
            )

            hr_email = os.getenv(
                "ADMIN_EMAIL"
            )


            print(
                "----------------------------------------",
                flush=True
            )

            print(
                "APPLICATION EMAIL DEBUG",
                flush=True
            )

            print(
                "GMAIL_USER:",
                gmail_address,
                flush=True
            )

            print(
                "ADMIN_EMAIL:",
                hr_email,
                flush=True
            )

            print(
                "GMAIL_APP_PASSWORD EXISTS:",
                bool(gmail_password),
                flush=True
            )


            # -----------------------------------------
            # Validate email configuration
            # -----------------------------------------

            if not gmail_address:

                raise Exception(
                    "GMAIL_USER environment variable is missing."
                )


            if not gmail_password:

                raise Exception(
                    "GMAIL_APP_PASSWORD environment variable is missing."
                )


            if not hr_email:

                raise Exception(
                    "ADMIN_EMAIL environment variable is missing."
                )


            # -----------------------------------------
            # Create email
            # -----------------------------------------

            msg = EmailMessage()


            msg["Subject"] = (
                f"New Job Application - {position}"
            )


            msg["From"] = gmail_address


            msg["To"] = hr_email


            msg.set_content(
                f"""
New Job Application Received

========================================

Application ID:
{application_id}

Candidate Name:
{name}

Candidate Email:
{email}

Position Applied For:
{position}

Skills:
{skills}

Submitted At:
{submitted_at}

Resume:
{safe_filename}

========================================

Please find the candidate's resume attached.
"""
            )


            # -----------------------------------------
            # Attach resume
            # -----------------------------------------

            with open(
                resume_path,
                "rb"
            ) as resume_file:

                resume_data = resume_file.read()


            if filename.endswith(".pdf"):

                msg.add_attachment(
                    resume_data,
                    maintype="application",
                    subtype="pdf",
                    filename=safe_filename
                )


            elif filename.endswith(".docx"):

                msg.add_attachment(
                    resume_data,
                    maintype="application",
                    subtype=(
                        "vnd.openxmlformats-officedocument."
                        "wordprocessingml.document"
                    ),
                    filename=safe_filename
                )


            # -----------------------------------------
            # Gmail SMTP
            # -----------------------------------------

            print(
                "Connecting to Gmail SMTP...",
                flush=True
            )


            with smtplib.SMTP(
                "smtp.gmail.com",
                587,
                timeout=30
            ) as server:

                server.ehlo()

                server.starttls()

                server.ehlo()


                print(
                    "Logging in to Gmail...",
                    flush=True
                )


                server.login(
                    gmail_address,
                    gmail_password
                )


                print(
                    "Sending application email...",
                    flush=True
                )


                server.send_message(
                    msg
                )


            email_sent = True


            print(
                "APPLICATION EMAIL SENT SUCCESSFULLY",
                flush=True
            )


        except Exception as mail_error:

            email_sent = False

            email_error = str(
                mail_error
            )


            print(
                "APPLICATION EMAIL ERROR:",
                repr(mail_error),
                flush=True
            )


        # =================================================
        # SUCCESS RESPONSE
        # =================================================

        print(
            "========================================",
            flush=True
        )


        return {

            "success": True,

            "message": (
                "Application submitted successfully!"
            ),

            "application_id": application_id,

            "email_sent": email_sent,

            "email_error": email_error

        }


    except Exception as e:

        print(
            "APPLICATION ERROR:",
            repr(e),
            flush=True
        )


        return {

            "success": False,

            "message": (
                "Application submission failed."
            ),

            "error": str(e)

        }