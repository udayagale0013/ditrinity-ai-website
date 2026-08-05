from fastapi import APIRouter
from pydantic import BaseModel
import sqlite3
from datetime import datetime

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

        return {
            "success": True,
            "message": "Contact form submitted successfully.",
            "contact_id": contact_id
        }

    except Exception as e:

        print("CONTACT ERROR:", e)

        return {
            "success": False,
            "message": "Contact form submission failed.",
            "error": str(e)
        }