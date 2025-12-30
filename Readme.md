# 🚀 BoGuSsite

> A modern, responsive portfolio and project showcase built with React, Vite, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC.svg)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7.svg)](https://mybogus-site.netlify.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Component Documentation](#component-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

---

## 🎯 Overview

**BoGuSsite** is a personal portfolio and project showcase web app. It features a beautiful, animated landing page, project gallery, skills overview, and more. Built with modern web technologies, it is fast, responsive, and easy to customize.

---

## ✨ Features

- ⚡ Blazing fast with Vite
- 🎨 Styled with Tailwind CSS
- 🧩 Modular, reusable React components
- 📄 Multi-page layout (Home, About, Projects, Skills, 404)
- 🚀 Deployed and production-ready (Netlify)
- 🎬 Animations with Framer Motion & React Reveal
- 🔍 Project filtering and search
- 🌙 Responsive, mobile-first design
- 🔗 Social media integration

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0**
- **Vite 5.0.8**
- **Tailwind CSS 3.3.6**
- **Lucide React** (icons)
- **React Router DOM** (routing)
- **Framer Motion, React Reveal** (animations)

---

## 📁 Project Structure

```
bogus-site/
├── public/
│   └── _redirects
├── src/
│   ├── assets/
│   │   └── images/
│   ├── Components/
│   │   ├── NavBar.jsx      # Top navigation bar
│   │   ├── Hero.jsx        # Animated landing section
│   │   └── Footer.jsx      # Social links/footer
│   ├── pages/
│   │   ├── Home.jsx        # Home page
│   │   ├── About.jsx       # About/skills/experience
│   │   ├── Projects.jsx    # Project gallery
│   │   ├── Skills.jsx      # Skills/services
│   │   └── PageNotFound.jsx# 404 page
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚦 Getting Started

---

## 📖 Usage Guide

- **Home:** Animated hero section with intro, CV download, and highlights.
- **About:** Personal info, skills, and experience.
- **Projects:** Filterable/searchable project gallery with images, links, and details.
- **Skills:** List of technical skills and services.
- **404:** Custom not-found page with animation.

---

## 🧩 Component Documentation

### Main Components
- **NavBar.jsx:** Responsive navigation bar with animated logo, navigation links, and mobile menu.
- **Hero.jsx:** Animated landing section with intro, bio, and CV download.
- **Footer.jsx:** Social media links (Twitter, LinkedIn, GitHub) with icons.

### Pages
- **Home.jsx:** Renders Hero component.
- **About.jsx:** Shows personal info, skills, and experience.
- **Projects.jsx:** Interactive portfolio with filter/search, project cards, and links.
- **Skills.jsx:** Technical skills/services with icons and descriptions.
- **PageNotFound.jsx:** Custom 404 page with animation.

### App Logic
- **App.jsx:** Handles loading animation, sets up routing, renders NavBar/Footer.

---

## 🚀 Deployment

- Hosted on Netlify: [View Live](https://mybogus-site.netlify.app)
- The `public/_redirects` file supports SPA routing on Netlify.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

### Code Style Guidelines
- Use functional components with hooks
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Test before submitting PR

---

## 📬 Contact

- **Author:** Bogus
- **LinkedIn:** [itumeleng-matlala-082681186](https://linkedin.com/in/itumeleng-matlala-082681186)
- **Twitter:** [@bogusDrc](https://twitter.com/@bogusDrc)
- **GitHub:** [BogusDrac](https://github.com/BogusDrac/Bogusdrac.git)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for styling system
- Lucide for beautiful icons
- Framer Motion & React Reveal for animation
- The open source community

---

## 🗺️ Roadmap

- [ ] Add dark mode
- [ ] Add blog section
- [ ] Add contact form
- [ ] Add more project categories
- [ ] Add testimonials section

---

Made with ❤️ by Bogus :)
