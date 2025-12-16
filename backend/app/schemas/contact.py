"""
Contact Schema
Pydantic models for contact form validation
"""
from typing import Optional
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime


class ContactFormBase(BaseModel):
    """Base contact form schema"""
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: Optional[str] = Field(None, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)
    phone: Optional[str] = Field(None, max_length=20)


class ContactFormCreate(ContactFormBase):
    """Schema for creating a contact form submission"""
    pass


class ContactResponse(BaseModel):
    """Response schema for contact form submission"""
    success: bool
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        from_attributes = True


class ContactFormSubmission(ContactFormBase):
    """Complete contact form submission with metadata"""
    id: str
    submitted_at: datetime
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    status: str = "pending"  # pending, sent, failed
    
    class Config:
        from_attributes = True
