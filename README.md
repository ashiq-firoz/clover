# <img src="./app/icon.ico"> 
# Clover Creative

<a href="https://clovercreative.ae">https://clovercreative.ae</a>
## Overview

This project is a **Next.js** web application designed to provide an optimized, responsive, and feature-rich platform. It uses **Tailwind CSS** for styling, ensuring a modern and clean design. The app is hosted on **Tasjeel cPanel hosting** and includes essential features like robots.txt and sitemap.xml for SEO optimization.

---

## Features

- **Framework**: Built with Next.js for a server-rendered, high-performance web experience.
- **Styling**: Tailwind CSS ensures a responsive, customizable UI.
- **SEO**: Includes robots.txt and sitemap.xml for search engine optimization.
- **Optimized Deployment**: Static and server-rendered pages are optimized during the build process.
- **Hosting**: Hosted on Tasjeel cPanel hosting for reliable deployment.

---

## Installation and Setup

### Prerequisites

1. Ensure **Node.js** is installed on your system.
2. Install **npm** (comes with Node.js).

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ashiq-firoz/clover.git
   cd clover
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Development Server

To start the development server:
```bash
npm run dev
```
This will start the server at `http://localhost:3000` by default.

### Build for Production

To generate optimized pages:
```bash
npm run build
```

### Start Production Server

To run the production build:
```bash
npm start
```

---

## Project Structure

```
├───app
│   ├───about        # About page components and logic
│   ├───contact      # Contact page components and logic
│   ├───faq          # FAQ page components and logic
│   ├───service      # Service page components and logic
│   └───util         # Utilities and helper functions
├───components
│   └───ui           # Reusable UI components
└───public
    └───img
        └───clients  # Client images for the website
```

---

## Hosting

- Hosted on **Tasjeel cPanel Hosting**.
- After building the project (`npm run build`), upload the generated files to the server.

---

## Technologies Used

- **Next.js**: React framework for optimized web applications.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.

---

## SEO Features

- **robots.txt**: Provides instructions to search engine bots.
- **sitemap.xml**: Lists all pages for search engine indexing.

---

