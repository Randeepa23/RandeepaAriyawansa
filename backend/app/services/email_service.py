"""
Email Service
Handles all email-related functionality
"""
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional
from app.core.config import settings


class EmailService:
    """Service for sending emails"""
    
    def __init__(self):
        self.smtp_host = settings.SMTP_HOST
        self.smtp_port = settings.SMTP_PORT
        self.smtp_user = settings.SMTP_USER
        self.smtp_password = settings.SMTP_PASSWORD
        self.from_email = settings.EMAIL_FROM or settings.SMTP_USER
    
    async def send_email(
        self,
        to_email: str,
        subject: str,
        body: str,
        reply_to: Optional[str] = None,
        html: bool = False
    ) -> bool:
        """
        Send an email
        
        Args:
            to_email: Recipient email address
            subject: Email subject
            body: Email body content
            reply_to: Optional reply-to address
            html: Whether the body is HTML
        
        Returns:
            True if email sent successfully, False otherwise
        """
        try:
            # Skip if email not configured
            if not self.smtp_user or not self.smtp_password:
                print("Email not configured. Skipping email send.")
                print(f"Would have sent email to {to_email}")
                print(f"Subject: {subject}")
                print(f"Body: {body}")
                return True
            
            # Create message
            message = MIMEMultipart("alternative")
            message["From"] = self.from_email
            message["To"] = to_email
            message["Subject"] = subject
            
            if reply_to:
                message["Reply-To"] = reply_to
            
            # Attach body
            mime_type = "html" if html else "plain"
            message.attach(MIMEText(body, mime_type))
            
            # Send email
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.smtp_user, self.smtp_password)
                server.send_message(message)
            
            print(f"Email sent successfully to {to_email}")
            return True
            
        except Exception as e:
            print(f"Error sending email: {str(e)}")
            return False
    
    async def send_html_email(
        self,
        to_email: str,
        subject: str,
        html_content: str,
        reply_to: Optional[str] = None
    ) -> bool:
        """
        Send an HTML email
        
        Args:
            to_email: Recipient email address
            subject: Email subject
            html_content: HTML email content
            reply_to: Optional reply-to address
        
        Returns:
            True if email sent successfully, False otherwise
        """
        return await self.send_email(
            to_email=to_email,
            subject=subject,
            body=html_content,
            reply_to=reply_to,
            html=True
        )
