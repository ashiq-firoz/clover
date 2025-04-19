# <img src="./app/icon.ico"> 
# Clover Creative

<a href="https://clovercreative.ae">https://clovercreative.ae</a>

## Overview

Clover Creative is a modern, high-performance web application built with **Next.js**. The platform leverages **Tailwind CSS** for responsive styling and elegant design patterns. Optimized for search engines with dedicated SEO features, the application is securely hosted on **Tasjeel cPanel hosting**, ensuring reliability and consistent performance for users.

---

## Key Features

- **Next.js Framework**: Delivers server-rendered pages with optimized client-side navigation for superior user experience
- **Tailwind CSS Integration**: Implements a utility-first approach for consistent, responsive design across all devices
- **Comprehensive SEO**: Built-in robots.txt and sitemap.xml configuration for improved search engine visibility
- **Performance Optimization**: Automatic image optimization, code splitting, and efficient asset delivery
- **Scalable Architecture**: Organized component structure designed for maintainability and future expansion
- **Secure Hosting**: Deployed on Tasjeel cPanel hosting with reliable uptime and performance metrics

---

## Installation & Setup

### Prerequisites

1. **Node.js** (version 14.x or later recommended)
2. **npm** or **yarn** package manager
3. Git (for version control)

### Quick Start Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/ashiq-firoz/clover.git
   cd clover
   ```
2. Install dependencies:
   ```bash
   npm install
   # or with yarn
   yarn install
   ```

---

## Development Workflow

### Local Development

Start the development server with hot-reloading:
```bash
npm run dev
# or
yarn dev
```
Your application will be available at `http://localhost:3000`.

### Production Build

Generate an optimized production build:
```bash
npm run build
# or
yarn build
```

### Production Deployment

Launch the production server:
```bash
npm start
# or
yarn start
```

---

## Project Architecture

```
├───app
│   ├───about        # About page components and layout
│   ├───contact      # Contact form and information components
│   ├───faq          # Frequently asked questions interface
│   ├───service      # Service offerings and details
│   └───util         # Shared utilities and helper functions
├───components
│   └───ui           # Reusable UI components and design system
├───public
│   └───img
│       └───clients  # Client logos and testimonial assets
└───styles           # Global styles and Tailwind configuration
```

---

## Deployment Guide

### Tasjeel cPanel Hosting Setup

1. Build the project locally: `npm run build`
2. Access your cPanel dashboard
3. Navigate to File Manager and upload the `.next`, `public`, and necessary configuration files
4. Configure Node.js application settings in cPanel
5. Set up necessary environment variables
6. Configure domain settings and SSL certificates

---

## Technology Stack

- **Frontend Framework**: Next.js (React)
- **Styling Solution**: Tailwind CSS
- **State Management**: React Context API / Redux (as applicable)
- **Performance Monitoring**: Next.js Analytics
- **SEO Tools**: Built-in head management with Next.js

---

## SEO Implementation

- **Dynamic Metadata**: Page-specific title and description tags
- **robots.txt**: Customized crawler instructions for search engines
- **sitemap.xml**: Automatically generated site structure for improved indexing
- **Structured Data**: JSON-LD implementation for rich search results
- **Performance Optimization**: Core Web Vitals compliance for better search ranking

---


## License

© Clover Creative. All rights reserved.