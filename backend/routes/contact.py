from fastapi import APIRouter
from pydantic import BaseModel
import sqlite3
from datetime import datetime
import smtplib
import os
from email.message import EmailMessage


router = APIRouter()


# =========================================================
# CONTACT REQUEST MODEL
# =========================================================

class ContactRequest(BaseModel):
    name: str
    email: str
    phone: str = ""
    company: str = ""
    subject: str
    message: str


# =========================================================
# CONTACT API
# =========================================================

@router.post("/contact")
def submit_contact(data: ContactRequest):

    conn = None

    try:

        print("========================================", flush=True)
        print("NEW CONTACT REQUEST", flush=True)

        print("Name:", data.name, flush=True)
        print("Email:", data.email, flush=True)
        print("Phone:", data.phone, flush=True)
        print("Company:", data.company, flush=True)
        print("Subject:", data.subject, flush=True)

        # =================================================
        # DATABASE
        # =================================================

        database = "applications.db"

        print(
            "DATABASE PATH:",
            os.path.abspath(database),
            flush=True
        )

        conn = sqlite3.connect(database)

        cursor = conn.cursor()

        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                company TEXT,
                subject TEXT NOT NULL,
                message TEXT NOT NULL,
                submitted_at TEXT NOT NULL
            )
            """
        )

        submitted_at = datetime.now().strftime(
            "%Y-%m-%d %H:%M:%S"
        )

        # =================================================
        # SAVE CONTACT
        # =================================================

        cursor.execute(
            """
            INSERT INTO contacts (
                name,
                email,
                phone,
                company,
                subject,
                message,
                submitted_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (
                data.name,
                data.email,
                data.phone,
                data.company,
                data.subject,
                data.message,
                submitted_at
            )
        )

        conn.commit()

        contact_id = cursor.lastrowid

        print(
            "CONTACT SAVED TO DATABASE. ID:",
            contact_id,
            flush=True
        )

        # Close database
        conn.close()
        conn = None

        # =================================================
        # EMAIL CONFIGURATION
        # =================================================

        gmail_address = os.getenv("GMAIL_USER")
        gmail_password = os.getenv("GMAIL_APP_PASSWORD")
        admin_email = os.getenv("ADMIN_EMAIL")

        print("----------------------------------------", flush=True)
        print("CONTACT EMAIL DEBUG", flush=True)

        print(
            "GMAIL USER:",
            gmail_address,
            flush=True
        )

        print(
            "ADMIN EMAIL:",
            admin_email,
            flush=True
        )

        print(
            "PASSWORD EXISTS:",
            bool(gmail_password),
            flush=True
        )

        # =================================================
        # CHECK ENV VARIABLES
        # =================================================

        if not gmail_address:

            raise Exception(
                "GMAIL_USER environment variable is missing."
            )

        if not gmail_password:

            raise Exception(
                "GMAIL_APP_PASSWORD environment variable is missing."
            )

        if not admin_email:

            raise Exception(
                "ADMIN_EMAIL environment variable is missing."
            )

        # =================================================
        # CREATE EMAIL
        # =================================================

        msg = EmailMessage()

        msg["Subject"] = (
            f"New Contact Enquiry - {data.subject}"
        )

        msg["From"] = gmail_address

        msg["To"] = admin_email

        msg.set_content(
            f"""
New Contact Enquiry Received

========================================

Contact ID:
{contact_id}

Name:
{data.name}

Email:
{data.email}

Phone:
{data.phone}

Company:
{data.company}

Subject:
{data.subject}

Message:
{data.message}

Submitted At:
{submitted_at}

========================================

Please contact the customer.
"""
        )

        # =================================================
        # GMAIL SMTP
        # =================================================

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
                "Sending contact email...",
                flush=True
            )

            server.send_message(msg)

        # =================================================
        # EMAIL SUCCESS
        # =================================================

        print(
            "CONTACT EMAIL SENT SUCCESSFULLY",
            flush=True
        )

        print("========================================", flush=True)

        return {
            "success": True,
            "message": "Contact form submitted successfully.",
            "contact_id": contact_id,
            "email_sent": True
        }

    # =====================================================
    # ERROR
    # =====================================================

    except Exception as e:

        if conn:
            conn.rollback()
            conn.close()

        print(
            "CONTACT ERROR:",
            repr(e),
            flush=True
        )

        print("========================================", flush=True)

        return {
            "success": False,
            "message": "Contact form submission failed.",
            "error": str(e),
            "email_sent": False
        }