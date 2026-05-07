# Karthik's Student Portfolio

A modern, minimal student portfolio built with React and Vite showcasing projects, skills, and contact information.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern & Minimal**: Clean, professional aesthetic with smooth animations
- **Sections**:
  - Hero/Landing section
  - About me
  - Featured projects showcase
  - Skills overview
  - Contact form
  - Footer with social links

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties
- **JavaScript**: ES6+

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/karthik/karthik-portfolio.git
cd karthik-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The portfolio will open automatically at `http://localhost:3000`

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Navigation bar
│   ├── Hero.jsx                # Landing section
│   ├── About.jsx               # About me section
│   ├── Projects.jsx            # Projects showcase
│   ├── Skills.jsx              # Skills section
│   ├── Contact.jsx             # Contact form
│   ├── Footer.jsx              # Footer
│   └── [Component].css         # Component styles
├── App.jsx                     # Main app component
├── App.css                     # App styles
├── index.css                   # Global styles
└── main.jsx                    # Entry point
```

## Customization

### Update Personal Information

Edit the following sections to add your information:

1. **Navigation** (`src/components/Navigation.jsx`): Update your name
2. **Hero** (`src/components/Hero.jsx`): Update headline, subtitle, and description
3. **About** (`src/components/About.jsx`): Update your bio and highlights
4. **Projects** (`src/components/Projects.jsx`): Add your projects to `projectsData`
5. **Skills** (`src/components/Skills.jsx`): Update `skillsData` with your skills
6. **Contact** (`src/components/Contact.jsx`): Update email and social links

### Customize Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: #1a1a1a;      /* Dark text color */
  --secondary: #f0f0f0;    /* Light background */
  --accent: #0066cc;       /* Accent blue */
  --text: #333;
  --text-light: #666;
  --border: #e0e0e0;
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### GitHub Pages

1. Add to `vite.config.js`:
```javascript
export default {
  base: '/karthik-portfolio/'
}
```

2. Deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git push origin master
```

## Contact Form

The contact form is currently set up for local testing. To make it functional, integrate with a service like:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.

---

Happy coding! 🚀
