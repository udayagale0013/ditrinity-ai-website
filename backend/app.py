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
from datetime import datetime
from routes.contact import router as contact_router
from routes.chat import router as chat_router
from routes.contact import router as contact_router
from routes.reviews import router as reviews_router
import smtplib
from email.message import EmailMessage
# --------------------------------
# Environment
# --------------------------------

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")

# --------------------------------
# FastAPI
# --------------------------------

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------
# Contact Router
# --------------------------------

app.include_router(contact_router)
app.include_router(chat_router)
app.include_router(reviews_router)
# --------------------------------
# Database
# --------------------------------

DATABASE = "applications.db"

UPLOAD_FOLDER = "uploads/resumes"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


def create_database():

    conn = sqlite3.connect(DATABASE)

    cursor = conn.cursor()

    cursor.execute("""
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
    """)

    conn.commit()
    conn.close()


create_database()


# --------------------------------
# NORMAL CHATBOT
# --------------------------------

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

If the user asks for contact information:

Email: info@ditrinity.com
Phone: +91 9876543210

Do not pretend to perform actions that you cannot perform.

If you don't know something, politely say that you don't know.
"""


@app.post("/chat")
def chat(data: ChatRequest):

    try:

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

        print("CHAT ERROR:", e)

        return {
            "reply": "Sorry, I am unable to respond right now."
        }


# --------------------------------
# RESUME PARSER
# --------------------------------

@app.post("/resume-parse")
async def resume_parse(
    resume: UploadFile = File(...)
):

    text = ""

    filename = resume.filename.lower()

    try:

        if filename.endswith(".pdf"):

            with pdfplumber.open(resume.file) as pdf:

                for page in pdf.pages:

                    page_text = page.extract_text()

                    if page_text:
                        text += page_text + "\n"

        elif filename.endswith(".docx"):

            document = docx.Document(resume.file)

            for para in document.paragraphs:
                text += para.text + "\n"

        else:

            return {
                "error": "Only PDF and DOCX files are supported."
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

Resume:

{text}
"""

        response = model.generate_content(prompt)

        return {
            "result": response.text
        }

    except Exception as e:

        print("RESUME PARSE ERROR:", e)

        return {
            "error": "Resume parsing failed.",
            "details": str(e)
        }


# --------------------------------
# RESUME MATCH SCORE
# --------------------------------

@app.post("/resume-score")
async def resume_score(
    resume: UploadFile = File(...)
):

    text = ""

    filename = resume.filename.lower()

    try:

        if filename.endswith(".pdf"):

            with pdfplumber.open(resume.file) as pdf:

                for page in pdf.pages:

                    page_text = page.extract_text()

                    if page_text:
                        text += page_text + "\n"

        elif filename.endswith(".docx"):

            document = docx.Document(resume.file)

            for para in document.paragraphs:
                text += para.text + "\n"

        else:

            return {
                "error": "Only PDF and DOCX files are supported."
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

Resume:

{text}
"""

        response = model.generate_content(prompt)

        return {
            "result": response.text
        }

    except Exception as e:

        print("RESUME SCORE ERROR:", e)

        return {
            "error": "Resume scoring failed.",
            "details": str(e)
        }


# --------------------------------
# APPLY / JOB APPLICATION
# --------------------------------
# --------------------------------
# APPLY / JOB APPLICATION
# --------------------------------

@app.post("/apply")
async def apply(
    name: str = Form(...),
    email: str = Form(...),
    skills: str = Form(...),
    position: str = Form(...),
    resume: UploadFile = File(...)
):

    try:

        # --------------------------------
        # Check resume type
        # --------------------------------

        filename = resume.filename.lower()

        if not (
            filename.endswith(".pdf")
            or filename.endswith(".docx")
        ):

            return {
                "success": False,
                "message": "Only PDF and DOCX resumes are supported."
            }

        # --------------------------------
        # Safe filename
        # --------------------------------

        safe_filename = os.path.basename(
            resume.filename
        )

        timestamp = datetime.now().strftime(
            "%Y%m%d_%H%M%S"
        )

        saved_filename = (
            f"{timestamp}_{safe_filename}"
        )

        resume_path = os.path.join(
            UPLOAD_FOLDER,
            saved_filename
        )

        # --------------------------------
        # Save Resume
        # --------------------------------

        with open(
            resume_path,
            "wb"
        ) as buffer:

            shutil.copyfileobj(
                resume.file,
                buffer
            )

        # --------------------------------
        # Save Application in Database
        # --------------------------------

        conn = sqlite3.connect(DATABASE)

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

        # --------------------------------
        # SEND EMAIL TO HR
        # --------------------------------

        try:

            gmail_address = os.getenv("GMAIL_USER")
            gmail_password = os.getenv("GMAIL_APP_PASSWORD")
            hr_email = os.getenv("ADMIN_EMAIL")

            msg = EmailMessage()

            msg["Subject"] = (
                f"New Job Application - {position}"
            )

            msg["From"] = gmail_address

            msg["To"] = hr_email

            msg.set_content(
                f"""
New Job Application Received

--------------------------------

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

--------------------------------

Please find the candidate's resume attached.
"""
            )

            # Attach Resume

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
                    subtype="vnd.openxmlformats-officedocument.wordprocessingml.document",
                    filename=safe_filename
                )

            # Connect Gmail SMTP

            with smtplib.SMTP(
                "smtp.gmail.com",
                587
            ) as server:

                server.starttls()

                server.login(
                    gmail_address,
                    gmail_password
                )

                server.send_message(msg)

            print(
                "APPLICATION EMAIL SENT SUCCESSFULLY"
            )

        except Exception as mail_error:

            # Application is already saved.
            # Don't fail the application because
            # email failed.

            print(
                "APPLICATION EMAIL ERROR:",
                mail_error
            )

        # --------------------------------
        # Success Response
        # --------------------------------

        return {
            "success": True,
            "message": "Application submitted successfully!",
            "application_id": application_id
        }

    except Exception as e:

        print(
            "APPLICATION ERROR:",
            e
        )

        return {
            "success": False,
            "message": "Application submission failed.",
            "error": str(e)
        }