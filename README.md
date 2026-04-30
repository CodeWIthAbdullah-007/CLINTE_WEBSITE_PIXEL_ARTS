# CLINTE_WEBSITE_PIXEL_ARTS
🎨 PixelArt - Printing & Packaging Website 📦
A modern, responsive, and high-performance single-page website designed for PixelArt, a premium printing and packaging company based in Karachi, Pakistan. Built with a stunning Glassmorphism dark theme to highlight creativity and quality.

PixelArt WebsiteHTML5CSS3JavaScript

✨ Features
🚀 Fully Responsive: Optimized for Desktop, Tablet, and Mobile devices.
🎨 Glassmorphism UI: Modern frosted glass effects (backdrop-filter) throughout the site.
🖱️ Custom Cursor: Interactive cursor with hover effects for desktop users.
🌙 Dark Theme: Eye-catching dark gradient background optimized for visual impact.
📜 Smooth Animations: Scroll-reveal animations, hover states, and floating elements.
📱 Mobile Menu: Hamburger menu for seamless mobile navigation.
📮 Functional Contact Form: Styled form with validation feedback.
⚡ Performance: Lightweight code with no external heavy libraries.

🛠️ Tech Stack
HTML5: Semantic markup structure.
CSS3: Flexbox, Grid, Custom Properties (Variables), Keyframe Animations.
JavaScript (Vanilla): DOM manipulation, Intersection Observers for scroll animations.
📂 Project Structure
CLINTE_WEBSITE_PIXEL_ARTS/│├── index.html          # Main HTML file├── style.css           # All styling and animations├── script.js           # Interactive logic (cursor, menu, scroll)├── README.md           # This file│└── assests/            # Images folder    ├── PixelArt_Logo-01.png    └── Pixel_Art_Client_List-01.png
🚀 How to Run
Download or Clone the project files to your computer.
Make sure your folder structure looks like this:
text

/your-folder
  ├── index.html
  ├── style.css
  ├── script.js
  └── assests/
Open index.html in any modern web browser (Chrome, Edge, Firefox, Safari).
Enjoy the glassmorphism experience! ✨
🎨 Customization
🎨 Changing Colors
You can easily change the accent color (Teal) in the style.css file:

css

:root {
    --teal: #19AEB0;       /* Main Accent Color */
    --teal-dark: #128C8E;  /* Darker Hover Color */
    --white: #ffffff;
    /* ... other variables */
}
🖼️ Changing Images
To update the logo or client list:

Replace the images in the assests/ folder.
Keep the filenames the same, OR
Update the src paths in index.html.
📱 Sections Overview
Navbar: Sticky glass navigation with mobile hamburger menu.
Hero Section: Full-screen introduction with animated text and stats.
Ticker: Infinite scrolling marquee of services.
About: Company info and contact details in a glass card.
Services: Grid layout showcasing printing capabilities.
Clients: Logo showcase of trusted partners.
Industries: List of sectors served and "Why Choose Us" cards.
Contact: Split-screen design with info on the left and a functional form on the right.
Footer: Copyright and branding.
📄 License
This project is developed for PixelArt. All rights reserved © 2026.

👨‍💻 Developer Notes
Cursor Logic: The custom cursor is hidden on mobile devices (max-width: 860px) to ensure better UX on touch screens.
Animations: Used IntersectionObserver in JS for performant scroll animations.
Glass Effect: Achieved using background: rgba(255,255,255, 0.0X) combined with backdrop-filter: blur(Xpx).
Made with ❤️ and CSS Magic
```
