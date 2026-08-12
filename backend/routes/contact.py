from fastapi import APIRouter
from pydantic import BaseModel
import sqlite3
from datetime import datetime
import os
import requests

router = APIRouter()


class ContactRequest(BaseModel):
    name: str
    email: str
    phone: str = ""
    company: str = ""
    subject: str
    message: str


@router.post("/contact")
def submit_contact(data: ContactRequest):

    try:
        print("========================================", flush=True)
        print("NEW CONTACT REQUEST", flush=True)

        # ========================================
        # DATABASE
        # ========================================

        database_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            "applications.db"
        )

        print(
            "DATABASE PATH:",
            database_path,
            flush=True
        )

        conn = sqlite3.connect(database_path)
        cursor = conn.cursor()

        cursor.execute("""
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
        """)

        submitted_at = datetime.now().strftime(
            "%Y-%m-%d %H:%M:%S"
        )

        cursor.execute("""
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
        """, (
            data.name,
            data.email,
            data.phone,
            data.company,
            data.subject,
            data.message,
            submitted_at
        ))

        conn.commit()

        contact_id = cursor.lastrowid

        conn.close()

        print(
            "CONTACT SAVED TO DATABASE. ID:",
            contact_id,
            flush=True
        )

        # ========================================
        # RESEND EMAIL
        # ========================================

        resend_api_key = os.getenv("RESEND_API_KEY")
        admin_email = os.getenv("ADMIN_EMAIL")

        print("----------------------------------------", flush=True)
        print("RESEND EMAIL DEBUG", flush=True)

        print(
            "RESEND API KEY EXISTS:",
            bool(resend_api_key),
            flush=True
        )

        print(
            "ADMIN EMAIL:",
            admin_email,
            flush=True
        )

        if not resend_api_key:
            raise Exception(
                "RESEND_API_KEY environment variable is missing."
            )

        if not admin_email:
            raise Exception(
                "ADMIN_EMAIL environment variable is missing."
            )

        # ========================================
        # EMAIL CONTENT
        # ========================================

        email_text = f"""
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

        # ========================================
        # RESEND API
        # ========================================

        response = requests.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {resend_api_key}",
                "Content-Type": "application/json"
            },
            json={
                "from": "onboarding@resend.dev",
                "to": [admin_email],
                "subject": f"New Contact Enquiry - {data.subject}",
                "text": email_text
            },
            timeout=30
        )

        print(
            "RESEND STATUS:",
            response.status_code,
            flush=True
        )

        print(
            "RESEND RESPONSE:",
            response.text,
            flush=True
        )

        # ========================================
        # EMAIL FAILED
        # ========================================

        if response.status_code >= 400:

            return {
                "success": False,
                "message": "Contact saved, but email could not be sent.",
                "contact_id": contact_id,
                "email_sent": False,
                "email_error": response.text
            }

        # ========================================
        # SUCCESS
        # ========================================

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

    except Exception as e:

        print(
            "CONTACT ERROR:",
            repr(e),
            flush=True
        )

        return {
            "success": False,
            "message": "Contact form submission failed.",
            "error": str(e)
        }