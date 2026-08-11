from fastapi import APIRouter
from pydantic import BaseModel
import sqlite3
from datetime import datetime
import smtplib
import os
from email.message import EmailMessage

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

        # --------------------------------
        # DATABASE
        # --------------------------------

        conn = sqlite3.connect("applications.db")
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

        # --------------------------------
        # SAVE CONTACT FORM
        # --------------------------------

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

        # --------------------------------
        # SEND EMAIL
        # --------------------------------

        try:

            gmail_address = os.getenv("GMAIL_USER")
            gmail_password = os.getenv("GMAIL_APP_PASSWORD")
            admin_email = os.getenv("ADMIN_EMAIL")

            print("GMAIL USER:", gmail_address)
            print("ADMIN EMAIL:", admin_email)
            print(
                "PASSWORD EXISTS:",
                bool(gmail_password)
            )

            # Create email

            msg = EmailMessage()

            msg["Subject"] = (
                f"New Contact Enquiry - {data.subject}"
            )

            msg["From"] = gmail_address

            msg["To"] = admin_email

            msg.set_content(
                f"""
New Contact Enquiry Received

--------------------------------

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

--------------------------------

Please contact the customer.
"""
            )

            # --------------------------------
            # GMAIL SMTP
            # --------------------------------

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
                "CONTACT EMAIL SENT SUCCESSFULLY"
            )

        except Exception as mail_error:

            print(
                "CONTACT EMAIL ERROR:",
                mail_error
            )

        # --------------------------------
        # SUCCESS RESPONSE
        # --------------------------------

        return {
            "success": True,
            "message": "Contact form submitted successfully.",
            "contact_id": contact_id
        }

    except Exception as e:

        print(
            "CONTACT ERROR:",
            e
        )

        return {
            "success": False,
            "message": "Contact form submission failed.",
            "error": str(e)
        }