import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * NavbarComponent
 * Navigation bar with theme toggle and menu items
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  public isDarkTheme: boolean = true;
  public isMobileMenuOpen: boolean = false;
  public isScrolled: boolean = false;

  // Navigation menu items
  public menuItems = [
    { label: 'Home', href: '#home', icon: '🏠' },
    { label: 'Portfolio', href: '#portfolio', icon: '💼' },
    { label: 'About Me', href: '#about', icon: '👤' },
    { label: 'Resume', href: '#resume', icon: '📄' },
    { label: 'Contact', href: '#contact', icon: '📧' }
  ];

  // Email for Let's Talk button
  public email: string = 'avithariyawansa207@gmail.com';

  ngOnInit(): void {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme !== 'light';
    this.applyTheme();

    // Add scroll listener
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  /**
   * Handle scroll event for navbar styling
   */
  private onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  /**
   * Toggle theme between dark and light
   */
  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  /**
   * Apply theme to document
   */
  private applyTheme(): void {
    if (this.isDarkTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }

  /**
   * Toggle mobile menu
   */
  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
   * Close mobile menu
   */
  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  /**
   * Navigate to section
   */
  public navigateTo(href: string): void {
    this.closeMobileMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Open email client
   */
  public openEmail(): void {
    window.location.href = `mailto:${this.email}`;
  }
}
