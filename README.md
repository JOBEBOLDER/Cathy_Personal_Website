# 🎨 Jieyao Chen - Digital Artist Portfolio

A modern, interactive portfolio website showcasing software engineering projects and digital art. Built with Next.js, React, Three.js, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/800x400/64ffda/0a192f?text=Jieyao+Chen+Portfolio)

## ✨ Features

### 🎯 Interactive Sections
- **Hero Section**: Animated typewriter effect with "hi, Jieyao here" greeting
- **About Section**: Personal photo with hover-to-reveal effect using green theme mask
- **Experience Section**: Professional background and skills showcase
- **Projects Section**: Interactive carousel with hover effects and project grid
- **Contact Section**: Professional contact information and social links

### 🎨 Visual Effects
- **3D Animations**: Three.js powered 3D scenes and wave grid animations
- **Hover Effects**: Interactive photo masks that reveal true colors on hover
- **Smooth Transitions**: Framer Motion animations throughout the site
- **Theme Consistency**: Green accent color (#64ffda) throughout all components

### 📱 Responsive Design
- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes
- Touch-friendly interactions

### 🚀 Performance
- Next.js 15 with App Router
- TypeScript for type safety
- Optimized images and animations
- Fast loading times

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety and better development experience

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icons

### 3D Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
digital-artist-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── contexts/          # React contexts
│   ├── components/            # React components
│   │   ├── sections/          # Page sections
│   │   │   ├── Intro.tsx     # Hero section
│   │   │   ├── About.tsx     # About section
│   │   │   ├── Experience.tsx # Experience section
│   │   │   ├── Projects.tsx  # Projects showcase
│   │   │   ├── Contact.tsx   # Contact section
│   │   │   └── Credits.tsx   # Credits section
│   │   ├── ui/               # UI components
│   │   │   └── Navigation.tsx
│   │   └── 3d/               # Three.js components
│   │       ├── WaveGrid.tsx  # Animated wave grid
│   │       ├── ArtCanvas.tsx # 3D art canvas
│   │       └── DigitalArtist.tsx
│   └── styles/               # CSS styles
│       └── components/       # Component-specific styles
├── public/                   # Static assets
│   └── assets/              # Images and media
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd digital-artist-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Key Features Explained

### Interactive Photo Masks
The portfolio features innovative hover effects on photos:
- **About Section**: Personal photo with green theme mask that reveals true colors on hover
- **Projects Section**: Carousel images with the same hover-to-reveal effect
- **Smooth Transitions**: 0.2s ease transitions for all hover effects

### 3D Animations
- **Wave Grid**: Animated 3D wave grid in the hero section
- **Three.js Integration**: Custom 3D scenes and components
- **Performance Optimized**: Efficient rendering with React Three Fiber

### Carousel with Auto-Pause
- **Auto-rotation**: Projects carousel rotates every 5 seconds
- **Hover to Pause**: Auto-rotation pauses when hovering over carousel
- **Manual Navigation**: Arrow buttons and indicator dots for manual control

## 🎯 Customization

### Theme Colors
The portfolio uses a consistent green theme:
- Primary: `#64ffda` (Green accent)
- Background: `#0a192f` (Dark navy)
- Text: `#ccd6f6` (Light slate)

### Adding New Projects
1. Edit `src/components/sections/Projects.tsx`
2. Add project data to `spotlightProjects` or `projects` objects
3. Include project images in `public/assets/`

### Modifying Animations
- **Framer Motion**: Edit animation parameters in component files
- **Three.js**: Modify 3D scenes in `src/components/3d/`
- **CSS Transitions**: Adjust timing in component CSS files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 600px
- **Tablet**: 600px - 1080px  
- **Desktop**: > 1080px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Build command: `npm run build`
- **Railway**: Automatic deployment from GitHub
- **AWS Amplify**: Connect GitHub repository

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About the Developer

**Jieyao Chen** - Software Engineer from Boston, MA
- Passionate about large-scale, high-impact products
- Experience with React, TypeScript, and modern web technologies
- Currently working as Software Development Engineer at Greentree
- Part-time teaching assistant for Distributed Systems at Northeastern University

## 🙏 Acknowledgments

- **Three.js** for 3D graphics capabilities
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Next.js** team for the amazing framework

---

⭐ **Star this repository if you found it helpful!**
