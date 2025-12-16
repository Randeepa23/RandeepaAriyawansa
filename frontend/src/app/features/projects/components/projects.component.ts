import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Project, ProjectCategory } from '../../../models/project.model';

/**
 * ProjectsComponent
 * Displays a filterable grid of projects with glassmorphism cards
 * Features smooth animations and responsive design
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('cardHover', [
      transition('false => true', [
        animate('300ms ease-out', style({ transform: 'translateY(-8px)' }))
      ]),
      transition('true => false', [
        animate('300ms ease-out', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  // Projects data
  public projects: Project[] = [];
  public filteredProjects: Project[] = [];
  public featuredProjects: Project[] = [];
  
  // UI state
  public selectedCategory: string = 'all';
  public isLoading: boolean = true;
  public error: string | null = null;
  public hoveredCardId: string | null = null;

  // Filter categories
  public categories = [
    { id: 'all', label: 'All Projects', icon: '🎯' },
    { id: ProjectCategory.WEB, label: 'Web Apps', icon: '🌐' },
    { id: ProjectCategory.FULLSTACK, label: 'Full-Stack', icon: '⚡' },
    { id: ProjectCategory.MOBILE, label: 'Mobile', icon: '📱' },
    { id: 'IoT & ML', label: 'IoT & ML', icon: '🤖' },
    { id: 'AI & Engineering', label: 'AI & Engineering', icon: '🧠' },
    { id: ProjectCategory.DESIGN, label: 'UI/UX', icon: '🎨' }
  ];

  // View mode
  public viewMode: 'grid' | 'list' = 'grid';

  constructor() {}

  ngOnInit(): void {
    this.loadProjects();
  }

  /**
   * Load projects from local data
   */
  public async loadProjects(): Promise<void> {
    try {
      this.isLoading = true;
      // Load mock projects directly
      this.projects = this.getMockProjects();
      this.featuredProjects = this.projects.filter(p => p.featured);
      this.filteredProjects = this.projects;
      this.error = null;
    } catch (error) {
      this.error = 'Failed to load projects. Please try again later.';
      console.error('Error loading projects:', error);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Get real projects data
   */
  private getMockProjects(): Project[] {
    return [
      {
        id: 'shg-hela-osu',
        title: 'SHG Hela Osu Wellness Hub',
        description: 'A comprehensive e-commerce platform dedicated to authentic Ayurvedic products. The system features a catalog of over 100 herbal medicines and wellness products, including Churnas, herbal drinks, and capsules. It includes functionality for product browsing, detailed views, a shopping cart, and user authentication. The platform digitizes a legacy spanning 80+ years, connecting customers with traditional Sri Lankan Ayurvedic remedies.',
        shortDescription: 'E-commerce platform for authentic Ayurvedic wellness products',
        thumbnail: '/assets/images/projects/shg-hela-osu.jpg',
        images: [
          '/assets/images/projects/shg-hela-osu-home.jpg',
          '/assets/images/projects/shg-hela-osu-products.jpg',
          '/assets/images/projects/shg-hela-osu-details.jpg'
        ],
        techStack: [
          { name: 'React', color: '#61DAFB' },
          { name: 'Node.js', color: '#339933' },
          { name: 'MongoDB', color: '#47A248' },
          { name: 'Tailwind', color: '#06B6D4' },
          { name: 'TypeScript', color: '#3178C6' }
        ],
        githubUrl: 'https://github.com/Randeepa23/SHG-Hela-Osu',
        liveUrl: 'https://shg-hela-osu-9xpw.vercel.app/',
        featured: true,
        category: 'Full-Stack' as any,
        completedDate: new Date('2024-12-01')
      },
      {
        id: 'rio-cafe',
        title: 'Rio Cafe - Happy Tea Time',
        description: 'A modern, responsive web application for Rio Cafe, a beloved culinary sanctuary in Negombo. The platform showcases the cafe\'s philosophy of connecting the community through exceptional food and warm hospitality. It features a dynamic menu highlighting signature dishes like Wood-Fired Pizza and Rio Cafe Burgers, a curated gallery of moments, customer testimonials, and integration for online ordering.',
        shortDescription: 'Modern web platform for a vibrant community cafe',
        thumbnail: '/assets/images/projects/rio-cafe.jpg',
        images: [
          '/assets/images/projects/rio-cafe-home.jpg',
          '/assets/images/projects/rio-cafe-menu.jpg',
          '/assets/images/projects/rio-cafe-gallery.jpg'
        ],
        techStack: [
          { name: 'React', color: '#61DAFB' },
          { name: 'Tailwind CSS', color: '#06B6D4' },
          { name: 'Framer Motion', color: '#0055FF' },
          { name: 'Vite', color: '#646CFF' },
          { name: 'TypeScript', color: '#3178C6' }
        ],
        githubUrl: 'https://github.com/Randeepa23/Rio-Cafe',
        liveUrl: 'https://riocafe.lk/',
        featured: true,
        category: 'Web Application' as any,
        completedDate: new Date('2025-01-15')
      },
      {
        id: 'la-casa-restaurant',
        title: 'La Casa Restaurant',
        description: 'A premium restaurant website designed to offer a seamless digital dining experience. The platform features an elegant user interface showcasing an extensive menu of authentic cuisines, a table reservation system, and a visual gallery of the ambiance. It connects customers with the "Taste of Home" philosophy, utilizing modern web technologies for smooth performance and responsiveness across all devices.',
        shortDescription: 'Elegant dining platform with menu and reservation features',
        thumbnail: '/assets/images/projects/la-casa.jpg',
        images: [
          '/assets/images/projects/la-casa-home.jpg',
          '/assets/images/projects/la-casa-menu.jpg',
          '/assets/images/projects/la-casa-reservation.jpg'
        ],
        techStack: [
          { name: 'React', color: '#61DAFB' },
          { name: 'Tailwind CSS', color: '#06B6D4' },
          { name: 'Framer Motion', color: '#0055FF' },
          { name: 'Node.js', color: '#339933' },
          { name: 'MongoDB', color: '#47A248' }
        ],
        githubUrl: 'https://github.com/Randeepa23/LaCasaRestaurant',
        liveUrl: 'https://la-casa-restaurant.vercel.app/',
        featured: true,
        category: 'Web Application' as any,
        completedDate: new Date('2024-10-20')
      },
      {
        id: 'nayomis-waterfront',
        title: "Nayomi's Waterfront",
        description: 'A visually immersive web platform for Nayomi\'s Waterfront, a popular restaurant situated by the Negombo lagoon in Sri Lanka. The website captures the scenic dining experience, showcasing their signature fusion of authentic Sri Lankan and Indian cuisines. Key features include a digital menu highlighting specials like Claypot Chicken Curry and Creamy Chicken Soup, a gallery for the lagoon-side ambiance, and location services for tourists visiting the Katunayake area.',
        shortDescription: 'Scenic dining platform for a lagoon-side restaurant',
        thumbnail: '/assets/images/projects/nayomis-waterfront.png',
        images: [
          '/assets/images/projects/nayomis-home.png',
          '/assets/images/projects/nayomis-menu.png',
          '/assets/images/projects/nayomis-gallery.png'
        ],
        techStack: [
          { name: 'React', color: '#61DAFB' },
          { name: 'Tailwind CSS', color: '#06B6D4' },
          { name: 'Framer Motion', color: '#0055FF' },
          { name: 'Vite', color: '#646CFF' },
          { name: 'Node.js', color: '#339933' }
        ],
        githubUrl: 'https://github.com/Randeepa23/NayomisWaterfront',
        liveUrl: 'https://nayomis-waterfront.vercel.app/',
        featured: true,
        category: 'Web Application' as any,
        completedDate: new Date('2024-11-05')
      },
      {
        id: 'todo-lists-app',
        title: 'To-Do Lists Mobile App',
        description: 'A native Android application designed for efficient task management. The app allows users to create, update, and delete daily tasks with ease. It features local data persistence using SQLite, ensuring tasks are saved even when the app is closed. The user interface is built with XML and Material Design principles to provide a clean and intuitive user experience.',
        shortDescription: 'Native Android app for task management with local storage',
        thumbnail: '/assets/images/projects/todo-app.png',
        images: [
          '/assets/images/projects/todo-app-splash.png',
          '/assets/images/projects/todo-app-list.png',
          '/assets/images/projects/todo-app-edit.png'
        ],
        techStack: [
          { name: 'Java', color: '#007396' },
          { name: 'Android SDK', color: '#3DDC84' },
          { name: 'SQLite', color: '#003B57' },
          { name: 'XML', color: '#E34F26' }
        ],
        githubUrl: 'https://github.com/Randeepa23/To-Do-Lists-App',
        liveUrl: '',
        featured: false,
        category: 'Mobile' as any,
        completedDate: new Date('2024-08-10')
      },
      {
        id: 'smart-fire-detection',
        title: 'Smart Fire Risk Detection System',
        description: 'An advanced IoT solution designed to detect fire hazards in real-time. The system utilizes a NodeMCU microcontroller integrated with Flame, Smoke/Gas, and Temperature sensors. A lightweight Machine Learning model processes sensor data to accurately predict fire risks while minimizing false alarms. The solution includes a responsive web dashboard for live monitoring and instant alert notifications.',
        shortDescription: 'IoT & ML-based real-time fire monitoring system',
        thumbnail: '/assets/images/projects/fire-detection.jpg',
        images: [
          '/assets/images/projects/fire-detection-dashboard.jpg',
          '/assets/images/projects/fire-detection-hardware.jpg',
          '/assets/images/projects/fire-detection-analysis.jpg'
        ],
        techStack: [
          { name: 'C++', color: '#00599C' },
          { name: 'Python', color: '#3776AB' },
          { name: 'React', color: '#61DAFB' },
          { name: 'Firebase', color: '#FFCA28' },
          { name: 'TensorFlow', color: '#FF6F00' }
        ],
        githubUrl: 'https://github.com/Randeepa23/smart-fire-risk-detection-system',
        liveUrl: 'https://smart-fire-risk-detection-system.vercel.app/',
        featured: true,
        category: 'IoT & ML' as any,
        completedDate: new Date('2025-10-12')
      },
      {
        id: 'bizconnect',
        title: 'BizConnect - Professional Web Services',
        description: 'A professional digital agency platform designed to convert visitors into clients. The website showcases service packages, UI/UX expertise, and professional web development offerings using a modern, conversion-focused interface.',
        shortDescription: 'Digital agency platform for web development services',
        thumbnail: '/assets/images/projects/bizconnect.jpg',
        images: [
          '/assets/images/projects/bizconnect-hero.jpg',
          '/assets/images/projects/bizconnect-services.jpg',
          '/assets/images/projects/bizconnect-contact.jpg'
        ],
        techStack: [
          { name: 'React', color: '#61DAFB' },
          { name: 'Tailwind CSS', color: '#06B6D4' },
          { name: 'Framer Motion', color: '#0055FF' },
          { name: 'Vite', color: '#646CFF' },
          { name: 'EmailJS', color: '#EA580C' }
        ],
        githubUrl: 'https://github.com/Randeepa23/my-website',
        liveUrl: 'https://my-website-three-amber-85.vercel.app/',
        featured: true,
        category: 'Web Application' as any,
        completedDate: new Date('2025-12-10')
      },
      {
        id: 'bookstore-mas',
        title: 'Bookstore Multi-Agent System (MAS)',
        description: 'A distributed AI system implementing Multi-Agent System principles where autonomous agents coordinate to manage bookstore operations using FIPA-ACL communication.',
        shortDescription: 'Autonomous multi-agent system for bookstore management',
        thumbnail: '/assets/images/projects/bookstore-mas.png',
        images: [
          '/assets/images/projects/mas-architecture.png',
          '/assets/images/projects/mas-agent-logs.png',
          '/assets/images/projects/mas-gui.png'
        ],
        techStack: [
          { name: 'Java', color: '#007396' },
          { name: 'JADE', color: '#00A86B' },
          { name: 'Swing', color: '#E34F26' },
          { name: 'Multi-Agent Systems', color: '#6A1B9A' }
        ],
        githubUrl: 'https://github.com/Randeepa23/BookstoreMAS',
        liveUrl: '',
        featured: false,
        category: 'AI & Engineering' as any,
        completedDate: new Date('2024-09-15')
      },
      {
        id: 'luxury-property-showcase',
        title: 'Luxury Properties - Premium Real Estate',
        description: 'A sophisticated real estate platform showcasing exclusive high-end properties with detailed listings, premium visuals, and agent connections.',
        shortDescription: 'Premium real estate platform for exclusive listings',
        thumbnail: '/assets/images/projects/luxury-property.png',
        images: [
          '/assets/images/projects/luxury-property-home.png',
          '/assets/images/projects/luxury-property-listings.png',
          '/assets/images/projects/luxury-property-details.png'
        ],
        techStack: [
          { name: 'Next.js', color: '#000000' },
          { name: 'React', color: '#61DAFB' },
          { name: 'Tailwind CSS', color: '#06B6D4' },
          { name: 'TypeScript', color: '#3178C6' },
          { name: 'Framer Motion', color: '#0055FF' }
        ],
        githubUrl: 'https://github.com/Randeepa23/Luxury-Property-Showcase-Website',
        liveUrl: 'https://luxury-property-showcase-website.vercel.app/',
        featured: true,
        category: 'Web Application' as any,
        completedDate: new Date('2024-11-25')
      },
      {
        id: 'map-property-finder',
        title: 'PropertyFinder - Interactive Map Search',
        description: 'A real estate search tool that enables users to explore properties through an interactive map with clickable markers and location-based browsing.',
        shortDescription: 'Real estate search tool with interactive map integration',
        thumbnail: '/assets/images/projects/map-finder.png',
        images: [
          '/assets/images/projects/map-finder-view.png',
          '/assets/images/projects/map-finder-popup.png',
          '/assets/images/projects/map-finder-list.png'
        ],
        techStack: [
          { name: 'React', color: '#61DAFB' },
          { name: 'Leaflet', color: '#199900' },
          { name: 'React Leaflet', color: '#61DAFB' },
          { name: 'Tailwind CSS', color: '#06B6D4' },
          { name: 'Vite', color: '#646CFF' }
        ],
        githubUrl: 'https://github.com/Randeepa23/Interactive-Map-Based-Property-Finder',
        liveUrl: 'https://interactive-map-based-property-find.vercel.app/',
        featured: true,
        category: 'Web Application' as any,
        completedDate: new Date('2024-11-30')
      },
      {
        id: 'smart-wallet-ui',
        title: 'SmartWallet – FinTech App UI/UX Design',
        description: 'A comprehensive UI/UX design for a modern digital wallet application focused on simplifying complex financial data into a clean, intuitive interface. Key modules include a spending dashboard, quick transfer flows, QR code payments, and transaction history. The high-fidelity prototype demonstrates the complete user journey from login to transaction completion, emphasizing accessibility, visual hierarchy, and usability.',
        shortDescription: 'High-fidelity UI/UX design and interactive prototype for a fintech app',
        thumbnail: '/assets/images/projects/smart-wallet.png',
        images: [
          '/assets/images/projects/smart-wallet-dashboard.png',
          '/assets/images/projects/smart-wallet-transfer.png',
          '/assets/images/projects/smart-wallet-profile.png'
        ],
        techStack: [
          { name: 'Figma', color: '#F24E1E' },
          { name: 'UI/UX Design', color: '#6A1B9A' },
          { name: 'Prototyping', color: '#00D2B4' },
          { name: 'Wireframing', color: '#808080' },
          { name: 'Design Systems', color: '#1BC47D' }
        ],
        githubUrl: 'https://www.figma.com/design/EGyvuiQTko8QPZbadky53P/SmartWallet',
        liveUrl: 'https://www.figma.com/proto/EGyvuiQTko8QPZbadky53P/SmartWallet',
        featured: true,
        category: 'UI/UX Design' as any,
        completedDate: new Date('2024-06-20')
      }
    ];
  }

  /**
   * Filter projects by category
   */
  public filterProjects(categoryId: string): void {
    this.selectedCategory = categoryId;
    
    if (categoryId === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        project => project.category === categoryId
      );
    }
  }

  /**
   * Toggle view mode
   */
  public toggleViewMode(): void {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
  }

  /**
   * Handle card hover
   */
  public onCardHover(projectId: string | null): void {
    this.hoveredCardId = projectId;
  }

  /**
   * Open project details
   */
  public openProject(project: Project): void {
    // Navigate to project detail page or open modal
    console.log('Opening project:', project.title);
    // this.router.navigate(['/projects', project.id]);
  }

  /**
   * Open external link
   */
  public openLink(url: string, event: Event): void {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Get tech stack color
   */
  public getTechColor(techName: string): string {
    const colors: { [key: string]: string } = {
      'Angular': 'text-red-400 bg-red-500/10 border-red-500/20',
      'React': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      'Vue': 'text-green-400 bg-green-500/10 border-green-500/20',
      'TypeScript': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      'Python': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
      'Node.js': 'text-green-400 bg-green-500/10 border-green-500/20',
      'FastAPI': 'text-teal-400 bg-teal-500/10 border-teal-500/20',
      'Tailwind': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      'MongoDB': 'text-green-400 bg-green-500/10 border-green-500/20',
      'PostgreSQL': 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    };
    
    return colors[techName] || 'text-gray-400 bg-gray-500/10 border-gray-500/20';
  }

  /**
   * Track by function for *ngFor optimization
   */
  public trackByProjectId(index: number, project: Project): string {
    return project.id;
  }
}
