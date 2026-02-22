# Projects Page Guide

This guide explains how to manage and add projects to your portfolio website.

## File Structure

- **`data/projectsData.js`** - Contains all project information
- **`components/ProjectCard.js`** - Card component for displaying individual projects
- **`pages/projects.js`** - Main projects page
- **`public/static/images/projects/`** - Directory for project images (optional)

## Adding a New Project

1. Open `data/projectsData.js`
2. Add a new project object to the `projectsData` array following this template:

```javascript
{
  title: 'Project Name',
  description: 'A brief description of what your project does. Keep it concise but informative (2-3 sentences).',
  imgSrc: '/static/images/projects/project-name.png', // Optional - leave empty '' for gradient placeholder
  href: 'https://github.com/username/project-name', // Project URL
  tags: ['Technology1', 'Technology2', 'Category'], // 3-5 tags
  stats: {
    stars: '⭐', // Optional emoji or number
    language: 'JavaScript', // Primary programming language
    license: 'MIT' // License type
  },
  highlights: [
    'Key feature 1',
    'Key feature 2',
    'Key feature 3',
    'Key feature 4' // 3-5 highlights
  ]
}
```

## Project Images

### Option 1: Use Custom Image
1. Add your image to `/public/static/images/projects/`
2. Reference it in `imgSrc`: `/static/images/projects/your-image.png`
3. Recommended size: 1088x612px (16:9 ratio)

### Option 2: Use Gradient Placeholder
- Leave `imgSrc` as empty string `''`
- A beautiful gradient with a code icon will be displayed automatically

## Tips for Great Project Descriptions

- **Title**: Keep it short and memorable
- **Description**: Focus on what problem it solves and key benefits
- **Tags**: Use 3-5 relevant tags (technologies, categories)
- **Highlights**: List 3-5 bullet points of key features or achievements
- **Stats**: Include language, license, and optionally stars/downloads

## Example Projects

See the existing projects in `projectsData.js` for reference:
- **Next Prayer**: CLI tool example
- **Loc**: Mobile app example

## Customization

### Change Card Design
Edit `components/ProjectCard.js` to modify:
- Colors and hover effects
- Layout and spacing
- Badge styles
- Gradient colors

### Change Page Layout
Edit `pages/projects.js` to modify:
- Grid columns (currently 2 columns)
- Header text
- Call-to-action section

## Project Order

Projects are displayed in the order they appear in the `projectsData` array. Put your most important projects first.
