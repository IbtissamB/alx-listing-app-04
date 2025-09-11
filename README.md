# 🏠 ALX Listing App

This a foundational Airbnb clone built to showcase responsive design, reusable components, and scalable architecture using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**.

## ✨ Project Overview

- Scaffolding a modern listing page similar to Airbnb
- Practicing production-ready setups using TypeScript and TailwindCSS
- Structuring code for maintainability and scalability
- Creating reusable UI components with type safety

## 🗂 Project Structure

```text
📦 alx-listing-app-00/
├── components/
│   ├── common/
│   │   ├── Card.tsx           # Reusable property card component
│   │   └── Button.tsx         # Reusable button component
│   └── layout/
│       ├── Header.tsx         # Navigation bar with logo, links, and search
│       ├── Footer.tsx         # Footer with copyright/info
│       └── Layout.tsx         # Wrapper for consistent page structure
│
├── constants/
│   └── index.ts               # Static data like PROPERTYLISTINGSAMPLE and filters
│
├── interfaces/
│   └── index.ts               # TypeScript interfaces (CardProps, ButtonProps, PropertyProps)
│
├── pages/
│   ├── _app.tsx               # App wrapper with Layout
│   └── index.tsx              # Home page with hero, filters, and listings
│
├── public/
│   └── assets/                # Images and icons (e.g. Book-1.png, background.jpg)
│
├── styles/
│   └── globals.css            # Tailwind base styles
│
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation

```

## 🧰 Prerequisites

Before running the project, make sure you have:
- Node.js v16+
- npm v7+
- A code editor like VS Code with Tailwind and TypeScript extensions.

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/alx-listing-app.git
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser
```bash
http://localhost:3000
```
