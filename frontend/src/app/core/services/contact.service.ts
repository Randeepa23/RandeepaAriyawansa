/**
 * Contact Service
 * Handles contact form submissions
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ContactForm, ContactResponse } from '../../models/contact.model';
import { environment } from '../../../environments/environment';

/**
 * Service for managing contact form submissions
 * Handles all API communications related to contact
 */
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly apiUrl = `${environment.apiUrl}/contact`;
  private readonly retryAttempts = 2;

  constructor(private http: HttpClient) {}

  /**
   * Submit contact form
   * @param formData - The contact form data
   */
  public submitContactForm(formData: ContactForm): Observable<ContactResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<ContactResponse>(this.apiUrl, formData, { headers })
      .pipe(
        retry(this.retryAttempts),
        catchError(this.handleError)
      );
  }

  /**
   * Test contact form submission (for development)
   * @param formData - The contact form data
   */
  public testContactForm(formData: ContactForm): Observable<ContactResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<ContactResponse>(`${this.apiUrl}/test`, formData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Validate email format
   * @param email - Email to validate
   */
  public validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  /**
   * Validate phone format (optional)
   * @param phone - Phone number to validate
   */
  public validatePhone(phone: string): boolean {
    if (!phone) return true; // Phone is optional
    const phonePattern = /^[\d\s\-\+\(\)]+$/;
    return phonePattern.test(phone) && phone.length >= 10;
  }

  /**
   * Error handler
   * @param error - The error object
   */
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Failed to submit form. Please try again.';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.status === 0) {
        errorMessage = 'Unable to connect to the server. Please check your internet connection.';
      } else if (error.status >= 400 && error.status < 500) {
        errorMessage = 'Invalid form data. Please check your inputs.';
      } else if (error.status >= 500) {
        errorMessage = 'Server error. Please try again later.';
      }
    }

    console.error('Contact form error:', error);
    return throwError(() => new Error(errorMessage));
  }
}
