/**
 * Contact Form Model
 * Defines the structure for contact form submissions
 */
export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  timestamp?: Date;
}

/**
 * Validation rules for contact form
 */
export interface ContactFormValidation {
  name: {
    required: boolean;
    minLength: number;
    maxLength: number;
  };
  email: {
    required: boolean;
    pattern: RegExp;
  };
  message: {
    required: boolean;
    minLength: number;
    maxLength: number;
  };
}
