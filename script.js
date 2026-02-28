// ============================================
// MAAZ DEEN SANJID KABIR - AI DASHBOARD
// ============================================

// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initTypingEffect();
    initCursorGlow();
    initScrollEffects();
    initSkillBars();
    initSegmentCards();
    initBackToTopButton();
    initThemeToggle();
    initScrollProgress();
    initSmoothScroll();
    console.log('✨ AI Dashboard Initialized Successfully!');
});

// ============================================
// 1. PARTICLE ANIMATION
// ============================================
function initParticles() {
    const container = document.getElementById('particleContainer');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;

        container.appendChild(particle);
    }

    // Recreate particles on window resize
    window.addEventListener('resize', () => {
        container.innerHTML = '';
        initParticles();
    });
}

// ============================================
// 2. TYPING EFFECT
// ============================================
function initTypingEffect() {
    const typingElement = document.getElementById('typingText');
    const phrases = [
        'Student | Mathematician | Programmer | Debater | Musician',
        'AI-Powered Portfolio Dashboard',
        'Building the Future with Code & Creativity',
        'Welcome to My Digital World'
    ];

    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (!isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, letterIndex + 1);
            letterIndex++;

            if (letterIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
        } else {
            typingElement.textContent = currentPhrase.substring(0, letterIndex - 1);
            letterIndex--;

            if (letterIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
                return;
            }
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();
}

// ============================================
// 3. CURSOR GLOW EFFECT
// ============================================
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorGlow.style.left = mouseX - 10 + 'px';
        cursorGlow.style.top = mouseY - 10 + 'px';
        cursorGlow.style.display = 'block';
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.display = 'none';
    });
}

// ============================================
// 4. SCROLL PROGRESS BAR
// ============================================
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// ============================================
// 5. BACK TO TOP BUTTON
// ============================================
function initBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.pointerEvents = 'auto';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.pointerEvents = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// 6. THEME TOGGLE (Dark/Light Mode)
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    let isDarkMode = true;

    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.backgroundColor = '#000';
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.style.backgroundColor = '#f0f0f0';
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        isDarkMode = false;
        document.body.style.backgroundColor = '#f0f0f0';
        themeIcon.textContent = '☀️';
    }
}

// ============================================
// 7. SKILL BARS ANIMATION
// ============================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                entry.target.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ============================================
// 8. SEGMENT CARDS INTERACTIONS
// ============================================
function initSegmentCards() {
    const segmentCards = document.querySelectorAll('.segment-card');

    segmentCards.forEach(card => {
        card.addEventListener('click', function() {
            const segment = this.dataset.segment;
            console.log('Clicked segment:', segment);
            
            // Add animation
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);

            // Trigger skill bar animation
            const skillBars = this.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 50);
            });
        });

        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.5)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// ============================================
// 9. SCROLL REVEAL ANIMATIONS
// ============================================
function initScrollEffects() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements on scroll
    gsap.utils.toArray('section').forEach((section, index) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1,
                    markers: false
                }
            }
        );
    });

    // Animate cards on scroll
    gsap.utils.toArray('.glass-card').forEach((card, index) => {
        gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'top 15%',
                    scrub: 0.5
                }
            }
        );
    });
}

// ============================================
// 10. SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// 11. ADVANCED ANIMATIONS WITH GSAP
// ============================================
function initAdvancedAnimations() {
    // Hero text animation
    gsap.to('.animate-glow-text', {
        duration: 3,
        repeat: -1,
        yoyo: true,
        textShadow: '0 0 30px rgba(0, 217, 255, 1)',
        ease: 'sine.inOut'
    });

    // Floating animation
    gsap.to('.animate-float', {
        duration: 6,
        y: -30,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

// ============================================
// 12. EVENT LISTENERS
// ============================================

// Scroll event for navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// ============================================
// 13. UTILITY FUNCTIONS
// ============================================

// Get random number
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// 14. PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================
// 15. CONSOLE GREETING
// ============================================
console.log(
    '%c🚀 Welcome to Maaz Deen Sanjid Kabir\'s AI Dashboard!',
    'font-size: 20px; color: #00d9ff; font-weight: bold; text-shadow: 0 0 10px #00d9ff;'
);
console.log(
    '%c✨ A futuristic portfolio showcasing skills in Mathematics, Programming, Debating & Music',
    'font-size: 14px; color: #9d4edd;'
);
console.log(
    '%c📧 Contact: maaz.kabir@email.com | 🏫 School: Saint Joseph Higher Secondary School',
    'font-size: 12px; color: #22d3ee;'
);

// Initialize advanced animations
initAdvancedAnimations();