"""
API Version 1 Router
Aggregates all API endpoints
"""
from fastapi import APIRouter
from app.api.v1.endpoints import projects, contact

api_router = APIRouter()

# Include endpoint routers
api_router.include_router(
    projects.router,
    prefix="/projects",
    tags=["Projects"]
)

api_router.include_router(
    contact.router,
    prefix="/contact",
    tags=["Contact"]
)
