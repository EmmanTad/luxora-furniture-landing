/* ==================================================
   Luxora Furniture Landing Page Styles (Professional)
   ================================================== */
:root {
  --main-bg: #f4f4f4;
  --accent: #222;
  --white: #fff;
  --card-radius: 15px;
  --font-main: "Poppins", Arial, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-main);
  background: var(--main-bg);
  color: #333;
  transition: background 0.2s;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  background: rgba(255,255,255,0.92);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.logo {
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 2px;
  color: var(--accent);
  outline: none;
}

nav {
  display: flex;
  gap: 28px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 3px 12px;
  border-radius: 5px;
  transition: background 0.2s, color 0.2s;
}
nav a:hover, nav a:focus {
  color: var(--accent);
  background: #eee;
  outline: none;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.7rem;
  color: var(--accent);
  margin-left: 16px;
  outline: none;
}

.hero {
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85') center/cover fixed;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content {
  background: rgba(34,34,34,.7);
  padding: 40px 60px;
  border-radius: var(--card-radius);
  color: var(--white);
  text-align: center;
  box-shadow: 0 8px 40px rgba(0,0,0,.13);
}
.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 12px;
}
.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 24px;
}
.btn {
  display: inline-block;
  padding: 12px 36px;
  background: var(--accent);
  color: var(--white);
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 3px 8px rgba(0,0,0,.04);
  transition: background 0.2s;
}
.btn:hover, .btn:focus {
  background: #555;
  outline: none;
}

.carousel-section {
  padding: 110px 40px 40px;
  text-align: center;
  background: var(--main-bg);
}
.carousel-section h2 {
  font-size: 2.2rem;
  margin-bottom: 22px;
  font-weight: 600;
}
.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
}
.carousel-btn {
  background: var(--white);
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 2rem;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,.06);
}
.carousel-btn:hover, .carousel-btn:focus {
  background: #eee;
  outline: none;
}
.carousel-container {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 0;
}
.product-card {
  min-width: 300px;
  background: var(--white);
  border-radius: var(--card-radius);
  padding: 28px 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,.09);
  text-align: left;
  transition: box-shadow 0.18s;
}
.product-card:hover, .product-card:focus-within {
  box-shadow: 0 16px 35px rgba(0,0,0,.11);
}
.product-card img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 10px;
}

.about,
.contact {
  padding: 80px 40px;
  text-align: center;
  background: var(--white);
}
.about h2, .contact h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.contact form {
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 19px;
}
.contact label {
  align-self: flex-start;
  font-size: 1rem;
  margin-bottom: 3px;
  color: #444;
}
input, textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  font-family: var(--font-main);
  resize: vertical;
}
input:focus, textarea:focus {
  border-color: var(--accent);
  outline: none;
}

button[type="submit"] {
  padding: 14px;
  background: var(--accent);
  color: var(--white);
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
button[type="submit"]:hover, button[type="submit"]:focus {
  background: #555;
}

.parallax {
  height: 55vh;
  background: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc') center/cover fixed;
  border-radius: 0;
  margin: 0;
}

footer {
  background: var(--accent);
  color: var(--white);
  padding: 28px 20px;
  text-align: center;
  font-size: 0.95rem;
}
footer a {
  color: #ccc;
  text-decoration: underline;
  margin: 0 2px;
}
footer a:hover, footer a:focus {
  color: var(--white);
  outline: none;
}

/* Responsive Design */
@media (max-width: 900px) {
  .hero-content {
    padding: 30px 10vw;
  }
  .carousel-section {
    padding: 90px 8vw 30px;
  }
  .about,
  .contact {
    padding: 70px 8vw;
  }
}

@media (max-width: 768px) {
  header {
    padding: 20px 18px;
  }
  nav {
    flex-direction: column;
    gap: 18px;
    background: var(--white);
    position: absolute;
    top: 70px;
    right: 18px;
    padding: 24px 14px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.11);
    border-radius: 8px;
    display: none;
  }
  nav.show {
    display: flex;
  }
  .menu-toggle {
    display: block;
  }
  .hero-content h1 {
    font-size: 2.15rem;
  }
  .carousel-container {
    gap: 13px;
  }
  .product-card {
    min-width: 90vw;
    padding: 16px 8px;
  }
}

/* End Luxora Furniture Styles */
