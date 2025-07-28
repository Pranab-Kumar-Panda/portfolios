document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const themeToggleIconMobile = document.getElementById('theme-toggle-icon-mobile');
    const htmlTag = document.documentElement;

    const toggleMobileMenu = () => {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.remove('animate-slide-up'); 
            mobileMenu.classList.add('animate-slide-down');
            mobileMenuButton.querySelector('svg path').setAttribute('d', 'M6 18L18 6M6 6l12 12'); 
        } else {
            mobileMenu.classList.remove('animate-slide-down'); 
            mobileMenu.classList.add('animate-slide-up');
            
            mobileMenu.addEventListener('animationend', function handler() {
                mobileMenu.classList.add('hidden');
                mobileMenu.removeEventListener('animationend', handler);
            }, { once: true });

            mobileMenuButton.querySelector('svg path').setAttribute('d', 'M4 6h16M4 12h16m-7 6h7'); 
        }
    };

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            });
        });
    }

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        htmlTag.classList.add('dark');
        if (themeToggleIcon) themeToggleIcon.textContent = 'dark_mode';
        if (themeToggleIconMobile) themeToggleIconMobile.textContent = 'dark_mode';
    } else {
        htmlTag.classList.remove('dark');
        if (themeToggleIcon) themeToggleIcon.textContent = 'light_mode';
        if (themeToggleIconMobile) themeToggleIconMobile.textContent = 'light_mode';
    }

    const toggleTheme = () => {
        if (htmlTag.classList.contains('dark')) {
            htmlTag.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            if (themeToggleIcon) themeToggleIcon.textContent = 'light_mode';
            if (themeToggleIconMobile) themeToggleIconMobile.textContent = 'light_mode';
        } else {
            htmlTag.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            if (themeToggleIcon) themeToggleIcon.textContent = 'dark_mode';
            if (themeToggleIconMobile) themeToggleIconMobile.textContent = 'dark_mode';
        }
    };

    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const header = document.querySelector('header');
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });

    const animatedElements = document.querySelectorAll('.animated-element');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = Array.from(entry.target.classList).find(cls =>
                    cls.startsWith('fade-in') || cls.startsWith('zoom-in') || cls.startsWith('pop-out')
                );

                if (animationClass) {
                    const delay = parseInt(entry.target.dataset.animationDelay || 0);
                    setTimeout(() => {
                        entry.target.classList.add('is-visible', `animate-${animationClass}`);
                    }, delay);
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach((element, index) => {
        if (element.classList.contains('skill-card')) {
            element.dataset.animationDelay = (index % 4) * 100 + 100;
        } else if (element.classList.contains('project-card')) {
            element.dataset.animationDelay = (index % 3) * 150 + Math.floor(index / 3) * 100 + 100;
        }
        observer.observe(element);
    });

    const header = document.querySelector('header');
    const navLinksContainer = document.querySelector('header nav .hidden.md\\:flex');
    const navLogo = document.querySelector('header nav a');
    let isShrunk = false;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (!isShrunk) {
                header.classList.add('py-2', 'text-base', 'shadow-lg');
                header.classList.remove('py-4', 'shadow-xl');

                if (navLinksContainer) {
                    navLinksContainer.classList.add('text-base');
                    navLinksContainer.classList.remove('text-lg');
                }
                
                if (navLogo) {
                    navLogo.classList.add('text-2xl', 'transform', 'hover:scale-100');
                    navLogo.classList.remove('text-3xl', 'hover:scale-105');
                }
                isShrunk = true;
            }
        } else {
            if (isShrunk) {
                header.classList.add('py-4', 'shadow-xl');
                header.classList.remove('py-2', 'text-base', 'shadow-lg');

                if (navLinksContainer) {
                    navLinksContainer.classList.add('text-lg');
                    navLinksContainer.classList.remove('text-base');
                }

                if (navLogo) {
                    navLogo.classList.add('text-3xl', 'transform', 'hover:scale-105');
                    navLogo.classList.remove('text-2xl', 'hover:scale-100');
                }
                isShrunk = false;
            }
        }
    });

    animateOnScroll();
    
    window.addEventListener('load', () => {
        const heroElements = document.querySelectorAll('#hero .animated-element');
        heroElements.forEach(element => {
            const animationClass = Array.from(element.classList).find(cls =>
                cls.startsWith('fade-in') || cls.startsWith('zoom-in') || cls.startsWith('pop-out')
            );
            if (animationClass) {
                const delay = parseInt(element.dataset.animationDelay || 0);
                setTimeout(() => {
                    element.classList.add('is-visible', `animate-${animationClass}`);
                }, delay);
            }
        });
    });
});
