/**
 * Build Co Projects - Components Loader
 * This script dynamically loads the navbar and footer components into each page
 * and initializes their functionality.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('./assets/components/navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;

                // Initialize navigation after navbar is loaded
                initNavigation();

                // Mark active nav link
                markActiveNavLink();
            })
            .catch(error => {
                console.error('Error loading navbar:', error);
            });
    }

    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('./assets/components/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;

                // Initialize return to top button
                initReturnToTop();
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }

    // Initialize navigation functionality
    function initNavigation() {
        const menuButton = document.querySelector('.menu-button');
        const navMenu = document.querySelector('.nav-menu');

        if (menuButton && navMenu) {
            menuButton.addEventListener('click', function() {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (menuButton.classList.contains('active') &&
                    !navMenu.contains(e.target) &&
                    !menuButton.contains(e.target)) {
                    menuButton.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }

        // Handle dropdown toggles
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle-2');

        // For mobile devices
        if (window.innerWidth <= 991) {
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    const dropdown = this.closest('.dropdown');
                    if (dropdown) {
                        dropdown.classList.toggle('w--open');
                    }
                });
            });
        }
    }

    // Mark active navigation link based on current page
    function markActiveNavLink() {
        const currentPath = window.location.pathname;
        let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

        // Clean up parameters if any
        if (currentPage.indexOf('?') !== -1) {
            currentPage = currentPage.substring(0, currentPage.indexOf('?'));
        }

        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            if (href === currentPage ||
                (currentPage === '' && href === 'index.html') ||
                (currentPage === '/' && href === 'index.html')) {
                link.classList.add('w--current');
            }
        });
    }

    // Initialize return to top button
    function initReturnToTop() {
        const returnTop = document.querySelector('.return-top');

        if (returnTop) {
            // Show/hide button based on scroll position
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    returnTop.classList.add('visible');
                } else {
                    returnTop.classList.remove('visible');
                }
            });

            // Scroll to top when clicked
            returnTop.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
});
