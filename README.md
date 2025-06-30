# Shubham Deshmukh - Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS showcasing my work as a Software Engineer, Machine Learning Engineer, and Data Engineer.

## 🚀 Live Demo

Visit my portfolio at: [https://shubhs0411.github.io/portfolio](https://shubhs0411.github.io/portfolio)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Heroicons
- **ML Components**: TensorFlow.js
- **Contact**: EmailJS

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shubhs0411/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Builds the Next.js application
2. Exports it as static files
3. Deploys to GitHub Pages

### Manual Deployment

To deploy manually:

```bash
npm run build
# The static files will be in the 'out' directory
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills section
│   ├── Projects.tsx   # Projects showcase
│   └── Contact.tsx    # Contact form
└── ...
```

## 🔧 Configuration

- **Next.js Config**: Configured for static export with GitHub Pages
- **Tailwind CSS**: Custom configuration with Inter font
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

Built with ❤️ by Shubham Deshmukh
