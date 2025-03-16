'use client';

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Apply theme to body
    document.body.setAttribute("data-bs-theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
    
    // Apply theme to navbar if it exists
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.setAttribute("data-bs-theme", theme);
    }
  }, [theme]);

  // Bootstrap JS for mobile navigation
  useEffect(() => {
    if (document.readyState === "complete") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
    
    // Apply initial animations to page elements
    const elementsToAnimate = document.querySelectorAll(".section-title, .card, .btn-primary");
    elementsToAnimate.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("zoom-in-out");
      }, index * 100);
    });
  }, []);

  return (
    <html lang="en" className={theme}>
      <head>
        <title>My Portfolio</title>
        <meta name="description" content="A creative portfolio website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="content-wrapper">
        <Navbar theme={theme} setTheme={setTheme} />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
