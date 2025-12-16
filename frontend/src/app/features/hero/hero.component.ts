import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

/**
 * HeroComponent
 * Professional hero section with typing animation and call-to-action
 * Features smooth animations and responsive design
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms 300ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, OnDestroy {
  // Typing animation properties
  public typedText: string = '';
  public currentPhraseIndex: number = 0;
  public isDeleting: boolean = false;
  private typingSpeed: number = 100;
  private deletingSpeed: number = 50;
  private pauseDuration: number = 2000;
  private typingInterval: any;

  // Dynamic phrases for typing effect
  public phrases: string[] = [
    'AI/ML Enthusiast',
    'Web Developer',
    '4th Year Undergraduate',
    'Full-Stack Developer'
  ];

  // Social media links
  public socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Randeepa23', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/randeepa-ariyawansa-a589a6265', icon: 'linkedin' },
    { name: 'X', url: 'https://x.com/Ariyawansa61892', icon: 'twitter' },
    { name: 'Dev.to', url: 'https://dev.to/randeepa_ariyawansa', icon: 'code' },
    { name: 'Email', url: 'mailto:avithariyawansa207@gmail.com', icon: 'mail' }
  ];

  // Stats for impact
  public stats = [
    { value: '10+', label: 'Projects' },
    { value: '4th Year', label: 'Undergraduate' },
    { value: 'AI/ML', label: 'Specialty' },
    { value: '100%', label: 'Dedication' }
  ];

  // Configuration
  public config = {
    name: 'Randeepa Ariyawansa',
    tagline: '4th Year Undergraduate | AI/ML Enthusiast',
    description: 'Passionate web developer and AI/ML enthusiast currently in my final year of undergraduate studies. I combine my love for building responsive web applications with cutting-edge machine learning technologies to create intelligent, user-centric solutions.',
    cvUrl: '/assets/files/MyCV.pdf',
    photoUrl: '/assets/images/profile.jpg'
  };

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  /**
   * Typing animation logic
   * Creates a realistic typing and deleting effect
   */
  private startTypingAnimation(): void {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    
    if (!this.isDeleting && this.typedText === currentPhrase) {
      // Pause at end of phrase
      this.typingInterval = setTimeout(() => {
        this.isDeleting = true;
        this.startTypingAnimation();
      }, this.pauseDuration);
      return;
    }

    if (this.isDeleting && this.typedText === '') {
      // Move to next phrase
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      this.typingInterval = setTimeout(() => this.startTypingAnimation(), 500);
      return;
    }

    // Type or delete character
    if (this.isDeleting) {
      this.typedText = currentPhrase.substring(0, this.typedText.length - 1);
    } else {
      this.typedText = currentPhrase.substring(0, this.typedText.length + 1);
    }

    const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    this.typingInterval = setTimeout(() => this.startTypingAnimation(), speed);
  }

  /**
   * Download CV handler
   */
  public downloadCV(): void {
    const link = document.createElement('a');
    link.href = this.config.cvUrl;
    link.download = 'Randeepa_Ariyawansa_CV.pdf';
    link.click();
  }

  /**
   * Scroll to section handler
   */
  public scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Social link click handler with analytics
   */
  public handleSocialClick(link: any): void {
    // Add analytics tracking here if needed
    console.log(`Clicked: ${link.name}`);
    window.open(link.url, '_blank');
  }
}
