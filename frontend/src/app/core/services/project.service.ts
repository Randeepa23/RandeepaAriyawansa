/**
 * Project Service
 * Handles all project-related API calls
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Project, ProjectsResponse, ProjectCategory } from '../../models/project.model';
import { environment } from '../../../environments/environment';

/**
 * Service for managing project data
 * Handles all API communications related to projects
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly apiUrl = `${environment.apiUrl}/projects`;
  private readonly retryAttempts = 3;

  constructor(private http: HttpClient) {}

  /**
   * Get all projects with optional filtering
   * @param category - Optional category filter
   * @param featured - Optional featured filter
   * @param page - Page number
   * @param pageSize - Items per page
   */
  public getProjects(
    category?: string,
    featured?: boolean,
    page: number = 1,
    pageSize: number = 10
  ): Promise<Project[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('page_size', pageSize.toString());

    if (category && category !== 'all') {
      params = params.set('category', category);
    }

    if (featured !== undefined) {
      params = params.set('featured', featured.toString());
    }

    return this.http
      .get<ProjectsResponse>(this.apiUrl, { params })
      .pipe(
        retry(this.retryAttempts),
        map(response => response.data),
        catchError(this.handleError)
      )
      .toPromise()
      .then(data => data || []);
  }

  /**
   * Get a single project by ID
   * @param projectId - The project ID
   */
  public getProject(projectId: string): Observable<Project> {
    return this.http
      .get<Project>(`${this.apiUrl}/${projectId}`)
      .pipe(
        retry(this.retryAttempts),
        catchError(this.handleError)
      );
  }

  /**
   * Get all featured projects
   */
  public getFeaturedProjects(): Observable<Project[]> {
    return this.http
      .get<Project[]>(`${this.apiUrl}/featured/list`)
      .pipe(
        retry(this.retryAttempts),
        catchError(this.handleError)
      );
  }

  /**
   * Get projects by category
   * @param category - The project category
   */
  public getProjectsByCategory(category: ProjectCategory): Observable<Project[]> {
    const params = new HttpParams().set('category', category);
    
    return this.http
      .get<ProjectsResponse>(this.apiUrl, { params })
      .pipe(
        retry(this.retryAttempts),
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  /**
   * Search projects by keyword
   * @param keyword - Search keyword
   */
  public searchProjects(keyword: string): Observable<Project[]> {
    // This would typically use a search endpoint
    // For now, we'll filter on the client side
    return this.getProjects().then(projects => 
      projects.filter(project => 
        project.title.toLowerCase().includes(keyword.toLowerCase()) ||
        project.description.toLowerCase().includes(keyword.toLowerCase())
      )
    ) as any;
  }

  /**
   * Error handler
   * @param error - The error object
   */
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred while fetching data';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
