"""
Projects API Endpoint
Handles all project-related API requests
"""
from typing import List, Optional
from fastapi import APIRouter, HTTPException, Query
from app.schemas.project import (
    Project,
    ProjectsResponse,
    ProjectCategory,
    TechTag,
    ProjectMetrics
)
from datetime import datetime

router = APIRouter()


# Mock data - Replace with database queries in production
MOCK_PROJECTS: List[Project] = [
    Project(
        id="1",
        title="E-Commerce Platform",
        description="Full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies focusing on performance and user experience.",
        short_description="Modern e-commerce platform with real-time features",
        thumbnail="/assets/images/projects/ecommerce.jpg",
        images=["/assets/images/projects/ecommerce-1.jpg", "/assets/images/projects/ecommerce-2.jpg"],
        tech_stack=[
            TechTag(name="Angular", color="#DD0031"),
            TechTag(name="TypeScript", color="#3178C6"),
            TechTag(name="FastAPI", color="#009688"),
            TechTag(name="PostgreSQL", color="#336791"),
            TechTag(name="Tailwind", color="#06B6D4")
        ],
        github_url="https://github.com/yourusername/ecommerce",
        live_url="https://ecommerce-demo.example.com",
        featured=True,
        category=ProjectCategory.FULLSTACK,
        completed_date=datetime(2024, 11, 15),
        challenges="Handling high traffic and real-time inventory updates",
        solutions="Implemented WebSocket connections and optimized database queries",
        metrics=ProjectMetrics(performance="95%", users=5000, impact="High")
    ),
    Project(
        id="2",
        title="Task Management App",
        description="Collaborative task management application with team features, real-time updates, and analytics dashboard. Focuses on productivity and team collaboration.",
        short_description="Collaborative task manager with real-time sync",
        thumbnail="/assets/images/projects/taskmanager.jpg",
        tech_stack=[
            TechTag(name="React", color="#61DAFB"),
            TechTag(name="Node.js", color="#339933"),
            TechTag(name="MongoDB", color="#47A248"),
            TechTag(name="Socket.io", color="#010101")
        ],
        github_url="https://github.com/yourusername/taskmanager",
        live_url="https://taskmanager-demo.example.com",
        featured=True,
        category=ProjectCategory.WEB,
        completed_date=datetime(2024, 9, 20),
        metrics=ProjectMetrics(users=1200, impact="Medium")
    ),
    Project(
        id="3",
        title="Weather Forecast Dashboard",
        description="Beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization.",
        short_description="Interactive weather dashboard with maps",
        thumbnail="/assets/images/projects/weather.jpg",
        tech_stack=[
            TechTag(name="Vue", color="#4FC08D"),
            TechTag(name="Python", color="#3776AB"),
            TechTag(name="FastAPI", color="#009688")
        ],
        github_url="https://github.com/yourusername/weather-dashboard",
        live_url="https://weather-demo.example.com",
        featured=False,
        category=ProjectCategory.FRONTEND,
        completed_date=datetime(2024, 7, 10)
    ),
    Project(
        id="4",
        title="Portfolio Design System",
        description="Comprehensive design system with reusable components, documentation, and theming support.",
        short_description="Modern design system with components",
        thumbnail="/assets/images/projects/design-system.jpg",
        tech_stack=[
            TechTag(name="Angular", color="#DD0031"),
            TechTag(name="Storybook", color="#FF4785"),
            TechTag(name="Tailwind", color="#06B6D4")
        ],
        github_url="https://github.com/yourusername/design-system",
        featured=False,
        category=ProjectCategory.DESIGN,
        completed_date=datetime(2024, 6, 5)
    )
]


@router.get("/", response_model=ProjectsResponse)
async def get_projects(
    category: Optional[str] = Query(None, description="Filter by category"),
    featured: Optional[bool] = Query(None, description="Filter featured projects"),
    page: int = Query(1, ge=1, description="Page number"),
    page_size: int = Query(10, ge=1, le=100, description="Items per page")
) -> ProjectsResponse:
    """
    Get all projects with optional filtering and pagination
    """
    projects = MOCK_PROJECTS.copy()
    
    # Apply filters
    if category and category != "all":
        projects = [p for p in projects if p.category == category]
    
    if featured is not None:
        projects = [p for p in projects if p.featured == featured]
    
    # Sort by completion date (newest first)
    projects.sort(key=lambda x: x.completed_date, reverse=True)
    
    # Apply pagination
    total = len(projects)
    start = (page - 1) * page_size
    end = start + page_size
    paginated_projects = projects[start:end]
    
    return ProjectsResponse(
        data=paginated_projects,
        total=total,
        page=page,
        page_size=page_size
    )


@router.get("/{project_id}", response_model=Project)
async def get_project(project_id: str) -> Project:
    """
    Get a specific project by ID
    """
    project = next((p for p in MOCK_PROJECTS if p.id == project_id), None)
    
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    return project


@router.get("/featured/list", response_model=List[Project])
async def get_featured_projects() -> List[Project]:
    """
    Get all featured projects
    """
    featured = [p for p in MOCK_PROJECTS if p.featured]
    featured.sort(key=lambda x: x.completed_date, reverse=True)
    return featured
