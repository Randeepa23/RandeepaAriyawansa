# Modern Portfolio Website

A professional, enterprise-grade portfolio built with **Angular 17**, **TypeScript**, and **Tailwind CSS**.

![Portfolio Preview](https://img.shields.io/badge/Angular-17-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan?logo=tailwindcss)

##  Features

**Hero Section** with dynamic typing animation  
**Projects Gallery** with filterable cards  
**Glassmorphism UI** with smooth animations  
**Fully Responsive** design  
**No Backend Required** - purely client-side  
**Fast & Lightweight**  

##  Quick Start

### Prerequisites
- Node.js 18+ and npm
- Angular CLI: `npm install -g @angular/cli`

### Installation

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

Open your browser at **http://localhost:4200** 🎉

##  Customization

### 1. Update Your Info

Edit `frontend/src/app/features/hero/hero.component.ts`:

```typescript
public config = {
  name: 'Your Name',
  tagline: 'Your Tagline',
  description: 'Your description...',
  cvUrl: '/assets/files/your-resume.pdf',
  photoUrl: '/assets/images/your-photo.jpg'
};

public phrases: string[] = [
  'Full-Stack Developer',
  'Your Role',
  'Your Specialty'
];
```

### 2. Add Your Projects

Edit `frontend/src/app/features/projects/components/projects.component.ts`:

Find the `getMockProjects()` method (around line 95) and update with your projects.

### 3. Add Your Images

Place your images in:
- Profile photo: `frontend/src/assets/images/profile.jpg`
- Project thumbnails: `frontend/src/assets/images/projects/`

##  Color Customization

Edit `frontend/tailwind.config.js` to change colors:

```javascript
colors: {
  primary: {
    500: '#your-color',
    // ... more shades
  }
}
```

##  Build for Production

```bash
cd frontend
npm run build:prod
```

Output will be in `frontend/dist/portfolio-frontend/` - ready to deploy!

##  Deployment

### Netlify / Vercel
1. Build: `npm run build:prod`
2. Deploy the `dist/portfolio-frontend` folder

### GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --prod --base-href "https://yourusername.github.io/portfolio/"
ngh --dir=dist/portfolio-frontend
```

##  Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── features/
│   │   │   ├── hero/           # Hero section component
│   │   │   └── projects/       # Projects gallery
│   │   └── models/             # TypeScript interfaces
│   ├── assets/
│   │   └── images/             # Your images here
│   └── styles/
│       └── styles.scss         # Global styles
├── tailwind.config.js          # Tailwind configuration
└── package.json
```

##  Tech Stack

- **Angular 17** - Standalone components
- **TypeScript 5.2** - Type safety
- **Tailwind CSS 3.4** - Utility-first styling
- **Angular Animations** - Smooth transitions

##  Learn More

- [Angular Docs](https://angular.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Full Setup Guide](SETUP_GUIDE.md)

##  License

MIT License - Feel free to use for your portfolio!

---

**Built with using Angular & Tailwind CSS**
