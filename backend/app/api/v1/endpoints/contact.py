"""
Contact API Endpoint
Handles contact form submissions and email notifications
"""
from fastapi import APIRouter, HTTPException, BackgroundTasks, Request
from app.schemas.contact import ContactFormCreate, ContactResponse
from app.services.email_service import EmailService
from app.core.config import settings
from datetime import datetime
import uuid

router = APIRouter()
email_service = EmailService()


@router.post("/", response_model=ContactResponse)
async def submit_contact_form(
    contact_data: ContactFormCreate,
    background_tasks: BackgroundTasks,
    request: Request
) -> ContactResponse:
    """
    Submit a contact form
    Sends email notification in the background
    """
    try:
        # Generate unique ID for the submission
        submission_id = str(uuid.uuid4())
        
        # Get client information
        client_ip = request.client.host
        user_agent = request.headers.get("user-agent", "Unknown")
        
        # Prepare email content
        email_subject = contact_data.subject or f"New contact from {contact_data.name}"
        email_body = f"""
        New Contact Form Submission
        
        ID: {submission_id}
        Timestamp: {datetime.utcnow().isoformat()}
        
        Name: {contact_data.name}
        Email: {contact_data.email}
        Phone: {contact_data.phone or 'Not provided'}
        Subject: {contact_data.subject or 'Not provided'}
        
        Message:
        {contact_data.message}
        
        ---
        Client IP: {client_ip}
        User Agent: {user_agent}
        """
        
        # Send email in background
        background_tasks.add_task(
            email_service.send_email,
            to_email=settings.EMAIL_TO or settings.EMAIL_FROM,
            subject=email_subject,
            body=email_body,
            reply_to=contact_data.email
        )
        
        # Send auto-reply to the sender
        auto_reply_subject = "Thank you for contacting me!"
        auto_reply_body = f"""
        Hi {contact_data.name},
        
        Thank you for reaching out! I've received your message and will get back to you as soon as possible.
        
        Here's a copy of your message:
        Subject: {contact_data.subject or 'Not provided'}
        Message: {contact_data.message}
        
        Best regards,
        Your Portfolio
        """
        
        background_tasks.add_task(
            email_service.send_email,
            to_email=contact_data.email,
            subject=auto_reply_subject,
            body=auto_reply_body
        )
        
        return ContactResponse(
            success=True,
            message="Your message has been sent successfully! I'll get back to you soon.",
            timestamp=datetime.utcnow()
        )
        
    except Exception as e:
        # Log the error (implement proper logging in production)
        print(f"Error processing contact form: {str(e)}")
        
        raise HTTPException(
            status_code=500,
            detail="Failed to process your request. Please try again later."
        )


@router.post("/test", response_model=ContactResponse)
async def test_contact_form(contact_data: ContactFormCreate) -> ContactResponse:
    """
    Test endpoint for contact form (doesn't send emails)
    Useful for development and testing
    """
    return ContactResponse(
        success=True,
        message="Test submission received successfully!",
        timestamp=datetime.utcnow()
    )
