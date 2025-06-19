# ShareInvestor Static Site

A modern, responsive static site for ShareInvestor, featuring a product showcase, interactive map, and more.  
Built with HTML, modular CSS, and vanilla JavaScript, and automatically deployed to GitHub Pages via GitHub Actions.

---

## 🚀 Features

- **Responsive Design**: Works beautifully on desktop and mobile.
- **Product Showcase**: Tabbed product carousel powered by Splide.js.
- **Interactive Map**: Clickable hotspots with info cards.
- **Modular CSS**: Organized by section for easy maintenance.
- **Automatic Deployment**: Publishes to GitHub Pages on every push to `main`.

---

## 📁 Project Structure

```
.
├── index.html
├── main.css
├── js/
│   ├── splide-init.js        # Splide carousel initialization
│   └── map-hotspot.js        # Interactive map hotspot logic
├── styles/
│   ├── accordion-section.css
│   ├── buttons.css
│   ├── client-section.css
│   ├── global.css
│   ├── header-section.css
│   ├── map-section.css
│   ├── media-queries.css
│   ├── products-section.css
│   ├── splide-carousel.css
│   └── variables.css
├── assets/
│   ├── Assets for Q1/
│   ├── Assets for Q2/
│   ├── Assets for Q3/
│   ├── Assets for Q4/
│   └── Assets for Q5/
└── .github/
    └── workflows/
        └── gh-pages.yml      # GitHub Actions workflow for deployment
```

---

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (optional, only if you want to use a local server)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (optional, for VSCode)

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Open `index.html` directly in your browser**, or use a local server for live reload:
   ```bash
   npx serve .
   # or use Live Server in VSCode
   ```

3. **Edit styles or JS in the `styles/` and `js/` folders.**  
   All changes will be reflected on refresh.

---

## 🚢 Deployment

Deployment is handled automatically via GitHub Actions:

- On every push to the `main` branch, the site is built and published to GitHub Pages.
- The workflow file is at `.github/workflows/gh-pages.yml`.

### Enabling GitHub Pages

1. Go to your repository's **Settings > Pages**.
2. Set the source to **GitHub Actions**.
3. Your site will be available at:  
   `https://<your-username>.github.io/<your-repo>/`

---

## 🖼️ Assets

All images and static assets are in the `assets/` directory, organized by section (Q1–Q5).

---

## 📝 Customization

- **Add new sections:**  
  Create new CSS files in `styles/` and link them in `main.css` if needed.
- **Add new JS features:**  
  Place new scripts in `js/` and reference them in `index.html`.
