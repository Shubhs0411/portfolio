# Project Images Guide

Your Projects section now has placeholder images generated for demonstration. Here's how to add real project images:

## Current Setup

- **Placeholder Images**: Generated in `/public/projects/` directory
- **Image Names**: Match the `image` property in each project object
- **Fallback**: If images fail to load, a gradient background is shown

## Adding Real Project Images

### 1. Prepare Your Images

- **Format**: PNG, JPG, or WebP (recommended)
- **Size**: 400x300px or larger (will be automatically resized)
- **Quality**: High quality, clear screenshots or mockups

### 2. Replace Placeholder Images

Replace the files in `/public/projects/` with your real project images:

```
public/projects/
├── career-compass.png      # Career Compass project
├── hspw.png               # HSP 3.0 Visualization
├── react-portfolio.png    # React Portfolio
├── pms.png               # Patient Monitoring System
├── blind-tourist-guide.png # Blind Tourist Guide
└── document-summarizer.png # Document Summarizer
```

### 3. Image Best Practices

- **Screenshots**: Take clean screenshots of your applications
- **Mockups**: Use tools like Figma, Sketch, or Canva for mockups
- **Consistent Style**: Keep similar aspect ratios and styles
- **File Size**: Optimize images for web (under 500KB each)

### 4. Alternative: Add More Project Images

To add additional project images for the modal gallery:

1. Add image paths to the `details.images` array in each project
2. Update the modal to show an image gallery
3. Add navigation between multiple project images

### 5. Image Optimization

The component uses Next.js `Image` component which provides:
- **Automatic optimization**
- **Lazy loading**
- **Responsive sizing**
- **WebP format conversion** (when supported)

### 6. Example: Adding a New Project

```typescript
{
  title: 'My New Project',
  description: 'Description here...',
  image: '/projects/my-new-project.png', // Add your image here
  // ... other properties
  details: {
    // ... project details
    images: ['/projects/my-new-project-1.png', '/projects/my-new-project-2.png']
  }
}
```

## Current Project Images

The following placeholder images were generated:
- **Career Compass**: Blue gradient with project title
- **HSP 3.0**: Purple gradient with project title  
- **React Portfolio**: Cyan gradient with project title
- **Patient Monitoring**: Green gradient with project title
- **Blind Tourist Guide**: Orange gradient with project title
- **Document Summarizer**: Red gradient with project title

Replace these with actual screenshots or mockups of your projects for a more professional look! 