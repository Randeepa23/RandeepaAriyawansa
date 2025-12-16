"""
Project Schema
Pydantic models for project data validation
"""
from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, Field, HttpUrl
from enum import Enum


class ProjectCategory(str, Enum):
    """Project category enumeration"""
    WEB = "Web Application"
    MOBILE = "Mobile App"
    FULLSTACK = "Full-Stack"
    BACKEND = "Backend"
    FRONTEND = "Frontend"
    DESIGN = "UI/UX Design"
    OTHER = "Other"


class TechTag(BaseModel):
    """Technology tag schema"""
    name: str = Field(..., min_length=1, max_length=50)
    icon: Optional[str] = None
    color: Optional[str] = None


class ProjectMetrics(BaseModel):
    """Project metrics schema"""
    performance: Optional[str] = None
    users: Optional[int] = None
    impact: Optional[str] = None


class ProjectBase(BaseModel):
    """Base project schema with common attributes"""
    title: str = Field(..., min_length=1, max_length=200)
    description: str = Field(..., min_length=1)
    short_description: Optional[str] = Field(None, max_length=300)
    thumbnail: str
    images: Optional[List[str]] = []
    tech_stack: List[TechTag]
    github_url: Optional[HttpUrl] = None
    live_url: Optional[HttpUrl] = None
    featured: bool = False
    category: ProjectCategory
    completed_date: datetime
    challenges: Optional[str] = None
    solutions: Optional[str] = None
    metrics: Optional[ProjectMetrics] = None


class ProjectCreate(ProjectBase):
    """Schema for creating a new project"""
    pass


class ProjectUpdate(BaseModel):
    """Schema for updating an existing project"""
    title: Optional[str] = Field(None, min_length=1, max_length=200)
    description: Optional[str] = None
    short_description: Optional[str] = Field(None, max_length=300)
    thumbnail: Optional[str] = None
    images: Optional[List[str]] = None
    tech_stack: Optional[List[TechTag]] = None
    github_url: Optional[HttpUrl] = None
    live_url: Optional[HttpUrl] = None
    featured: Optional[bool] = None
    category: Optional[ProjectCategory] = None
    completed_date: Optional[datetime] = None
    challenges: Optional[str] = None
    solutions: Optional[str] = None
    metrics: Optional[ProjectMetrics] = None


class Project(ProjectBase):
    """Complete project schema with ID"""
    id: str
    
    class Config:
        from_attributes = True


class ProjectsResponse(BaseModel):
    """Response schema for multiple projects"""
    data: List[Project]
    total: int
    page: int = 1
    page_size: int = 10
    
    class Config:
        from_attributes = True
