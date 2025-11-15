# CupTime — Full Project Scaffold

This canvas contains a **ready-to-run** full-stack scaffold for the CupTime-inspired site you asked for. It includes a React + Vite + Tailwind frontend and a simple Node.js + Express mock backend (with in-memory data) so you can run and test product listing, cart, and order flows locally.

> **Important**: This is an original implementation inspired by the referenced website. Replace placeholder images and copy with your own licensed assets before publishing.

---

## Project structure

```
cuptime-clone/
├─ frontend/
│  ├─ package.json
│  ├─ vite.config.js
│  ├─ postcss.config.cjs
│  ├─ tailwind.config.cjs
│  ├─ index.html
│  ├─ src/
│  │  ├─ main.jsx
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  ├─ pages/
│  │  │  ├─ Home.jsx
│  │  │  ├─ Products.jsx
│  │  │  ├─ Cart.jsx
│  │  │  └─ Checkout.jsx
│  │  ├─ components/
│  │  │  ├─ Header.jsx
│  │  │  ├─ ProductCard.jsx
│  │  │  └─ Footer.jsx
│  │  └─ assets/
│  │     └─ (place your images here)
├─ backend/
│  ├─ package.json
│  ├─ server.js
│  └─ data/
│     └─ products.json
├─ README.md
```

---

## README — how to run locally

1. Clone the project and `cd cuptime-clone`.
2. Start backend:
   - `cd backend` 
   - `npm install` 
   - `npm start` (runs on port 4000)
3. Start frontend:
   - `cd ../frontend` 
   - `npm install` 
   - `npm run dev` (open http://localhost:5173)

The frontend expects the backend at `http://localhost:4000`.
