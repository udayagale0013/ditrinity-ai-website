from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(data: ChatRequest):

    message = data.message.lower().strip()

    # Greeting
    if any(word in message for word in [
        "hello",
        "hi",
        "hey",
        "hii"
    ]):
        reply = (
            "Hello! 👋 Welcome to diTrinity Technologies. "
            "How can I help you today?"
        )

    # Services
    elif "service" in message or "services" in message:
        reply = (
            "We provide AI Solutions, Cloud Solutions, ERP, PLM, "
            "Data Analytics, Digital Transformation and Custom "
            "Software Development."
        )

    # Careers
    elif (
        "career" in message
        or "job" in message
        or "jobs" in message
        or "vacancy" in message
    ):
        reply = (
            "You can explore our available opportunities on the "
            "Careers page and apply for a suitable position."
        )

    # Contact
    elif (
        "contact" in message
        or "email" in message
        or "phone" in message
    ):
        reply = (
            "You can contact diTrinity Technologies at "
            "info@ditrinity.com or +91 9876543210."
        )

    # About
    elif (
        "about" in message
        or "company" in message
        or "ditrinity" in message
    ):
        reply = (
            "diTrinity Technologies is focused on digital innovation "
            "through AI, cloud, enterprise software and custom "
            "technology solutions."
        )

    # Thanks
    elif (
        "thank" in message
        or "thanks" in message
    ):
        reply = "You're welcome! 😊 Is there anything else I can help you with?"

    # Bye
    elif (
        "bye" in message
        or "goodbye" in message
    ):
        reply = "Goodbye! 👋 Have a great day!"

    # Default
    else:
        reply = (
            "I'm the diTrinity Technologies assistant. "
            "You can ask me about our services, careers, "
            "company or contact information."
        )

    return {
        "reply": reply
    }