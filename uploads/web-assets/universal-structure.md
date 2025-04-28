# Universal HTML Structure for Build Co

I've created a standardized HTML structure for your website. Here's how it's organized:

## Head Section
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BUILD CO PROJECTS | PAGE TITLE</title>
    <meta name="description" content="Page-specific description here - keep under 160 characters">
    <meta property="og:title" content="BUILD CO PROJECTS | PAGE TITLE">
    <meta property="og:description" content="Page-specific description here - keep under 160 characters">
    <meta property="og:image" content="./assets/images/build-co-preview.png">
    <link rel="shortcut icon" type="image/x-icon" href="./assets/images/favicon.png">
    <link rel="apple-touch-icon" href="./assets/images/apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/main.css">
    <!-- Placeholder for JSON-LD or additional SEO elements -->
</head>
```

## Navigation Header
```html
<body>
    <header class="header">
        <div class="container">
            <div class="header-inner">
                <a href="index.html" class="logo">
                    <img src="./assets/images/buildco-logo.png" alt="Build Co Projects Logo">
                </a>
                <nav class="nav">
                    <ul class="nav-list">
                        <li><a href="index.html" class="nav-link">HOME</a></li>
                        <li><a href="about.html" class="nav-link">ABOUT</a></li>
                        <li><a href="construction.html" class="nav-link">CONSTRUCTION</a></li>
                        <li><a href="project-management.html" class="nav-link">PROJECT MANAGEMENT</a></li>
                        <li><a href="fixed-fee-permit-packages.html" class="nav-link">FIXED FEE PERMITS</a></li>
                        <li><a href="contact.html" class="nav-link">CONTACT</a></li>
                    </ul>
                </nav>
                <div class="mobile-nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
```

## Content Area
```html
    <main>
        <!-- Page-specific content goes here -->
    </main>
```

## Footer
```html
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <img src="./assets/images/buildco-logo.png" alt="Build Co Projects" class="footer-logo">
                    <p class="footer-info">BUILD CO PROJECTS PTY LTD</p>
                    <p class="footer-info">ACN: 677 960 735</p>
                    <p class="footer-info">ABN: 44 677 960 735</p>
                </div>
                
                <div class="footer-column">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.html" class="footer-link">HOME</a></li>
                        <li><a href="about.html" class="footer-link">ABOUT</a></li>
                        <li><a href="construction.html" class="footer-link">CONSTRUCTION</a></li>
                        <li><a href="project-management.html" class="footer-link">PROJECT MANAGEMENT</a></li>
                        <li><a href="fixed-fee-permit-packages.html" class="footer-link">FIXED FEE PERMITS</a></li>
                        <li><a href="contact.html" class="footer-link">CONTACT</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4>Contact Us</h4>
                    <div class="contact-item">
                        <img src="./assets/images/email-icon.png" alt="Email" class="contact-icon">
                        <div class="contact-text">
                            <a href="mailto:enquiries@buildcoprojects.com.au">enquiries@buildcoprojects.com.au</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <img src="./assets/images/phone-icon.png" alt="Phone" class="contact-icon">
                        <div class="contact-text">
                            <a href="tel:+61499144033">0499 144 033</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="legal-block">
                <div class="legal-text">© 2024 Build Co Projects Pty Ltd. All Rights Reserved.</div>
                <div class="social-links">
                    <a href="https://www.instagram.com/build.co_projects/" target="_blank" class="social-link">
                        <img src="./assets/images/instagram-icon.svg" alt="Instagram" class="social-icon">
                    </a>
                    <a href="https://www.facebook.com/subconnectgroup" target="_blank" class="social-link">
                        <img src="./assets/images/facebook-icon.svg" alt="Facebook" class="social-icon">
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <a href="#top" class="back-to-top" id="backToTop">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>

    <script src="./assets/js/main.js"></script>
</body>
</html>
```

## CSS Structure
I've extracted and consolidated the common CSS styles from your pages into a single external CSS file. This ensures consistent styling across all pages and makes future updates easier to manage.

## Asset Organization
Based on the structure above, here's how your assets should be organized:

```
your-website/
├── index.html
├── about.html
├── construction.html
├── project-management.html
├── fixed-fee-permit-packages.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── favicon.png
│       ├── apple-touch-icon.png
│       ├── buildco-logo.png
│       ├── email-icon.png
│       ├── phone-icon.png
│       ├── instagram-icon.svg
│       ├── facebook-icon.svg
│       └── ... (all other images)
```

This structure provides a clean, organized approach to your website files and will work well with Netlify static hosting.
