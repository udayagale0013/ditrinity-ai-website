from fastapi import APIRouter
from pydantic import BaseModel
import sqlite3
from datetime import datetime
import os
import smtplib

from dotenv import load_dotenv

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()

router = APIRouter()

DATABASE = "applications.db"


class ReviewRequest(BaseModel):
    name: str
    email: str = ""
    rating: int
    review: str


def create_review_table():

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT,
            rating INTEGER NOT NULL,
            review TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()


create_review_table()


def send_review_email(name, email, rating, review):

    sender = os.getenv("GMAIL_USER")
    password = os.getenv("GMAIL_APP_PASSWORD")
    receiver = os.getenv("ADMIN_EMAIL")

    try:

        print("GMAIL_USER:", sender)
        print("ADMIN_EMAIL:", receiver)
        print("APP PASSWORD LOADED:", bool(password))
        print("APP PASSWORD LENGTH:", len(password) if password else 0)

        msg = MIMEMultipart()

        msg["From"] = sender
        msg["To"] = receiver
        msg["Subject"] = "⭐ New Review Received - diTrinity"

        body = f"""
New Review Received

Name : {name}

Email : {email}

Rating : {rating}/5

Review :

{review}
"""

        msg.attach(MIMEText(body, "plain", "utf-8"))

        with smtplib.SMTP("smtp.gmail.com", 587) as server:

            server.ehlo()
            server.starttls()
            server.ehlo()

            server.login(sender, password)

            server.sendmail(
                sender,
                receiver,
                msg.as_string()
            )

        print("Review Email Sent Successfully")

    except Exception as e:

        print("EMAIL ERROR :", repr(e))

@router.get("/reviews")
def get_reviews():

    conn = sqlite3.connect(DATABASE)

    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            id,
            name,
            email,
            rating,
            review,
            created_at
        FROM reviews
        ORDER BY id DESC
    """)

    rows = cursor.fetchall()

    conn.close()

    reviews = []

    for row in rows:

        reviews.append({

            "id": row[0],

            "name": row[1],

            "email": row[2],

            "rating": row[3],

            "review": row[4],

            "created_at": row[5]

        })

    # IMPORTANT: return FOR LOOP च्या बाहेर
    return reviews


@router.post("/reviews")
def add_review(data: ReviewRequest):

    conn = sqlite3.connect(DATABASE)

    cursor = conn.cursor()

    created_at = datetime.now().strftime(
        "%Y-%m-%d %H:%M:%S"
    )

    cursor.execute("""
        INSERT INTO reviews
        (
            name,
            email,
            rating,
            review,
            created_at
        )
        VALUES (?, ?, ?, ?, ?)
    """, (
        data.name,
        data.email,
        data.rating,
        data.review,
        created_at
    ))

    conn.commit()

    review_id = cursor.lastrowid

    send_review_email(
        data.name,
        data.email,
        data.rating,
        data.review
    )

    conn.close()

    return {
        "success": True,
        "message": "Review submitted successfully.",
        "review_id": review_id
    }