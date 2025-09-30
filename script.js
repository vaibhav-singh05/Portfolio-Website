// Advanced Portfolio JavaScript with Cool Effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initParticles();
    initCustomCursor();
    initScrollProgress();
    initThemeToggle();
    initSmoothScrolling();
    initAnimations();
    initTypingEffect();
    init3DEffects();
    initLoadingAnimation();
    
    // Create floating particles
    function initParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Custom cursor effect
    function initCustomCursor() {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        if (!cursor || !cursorFollower) return;
        
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            // Smooth cursor movement
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            followerX += (mouseX - followerX) * 0.05;
            followerY += (mouseY - followerY) * 0.05;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .project-card, .mainbox1, .mainbox2');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursorFollower.style.transform = 'scale(1.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorFollower.style.transform = 'scale(1)';
            });
        });
    }
    
    // Scroll progress indicator
    function initScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress');
        if (!progressBar) return;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    // Theme toggle functionality
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeToggle(savedTheme);
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeToggle(newTheme);
            
            // Add transition effect
            document.body.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
    
    function updateThemeToggle(theme) {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        const icon = themeToggle.querySelector('span');
        const text = themeToggle.querySelector('span').nextSibling;
        
        if (theme === 'light') {
            icon.textContent = '☀️';
            text.textContent = ' Light Mode';
        } else {
            icon.textContent = '🌙';
            text.textContent = ' Dark Mode';
        }
    }
    
    // Smooth scrolling for navigation
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Advanced animations
    function initAnimations() {
        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.mainbox1, .mainbox2, .project-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            observer.observe(el);
        });
    }
    
    // Enhanced typing effect
    function initTypingEffect() {
        const typedElement = document.getElementById('element');
        if (!typedElement || typeof Typed === 'undefined') return;
        
        new Typed("#element", {
            strings: [
                "Backend Developer", 
                "Python Developer", 
                "Django Expert", 
                "Web Developer",
                "Problem Solver",
                "Tech Enthusiast"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            onComplete: function() {
                // Add a subtle glow effect when typing completes
                typedElement.style.textShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
                setTimeout(() => {
                    typedElement.style.textShadow = '';
                }, 1000);
            }
        });
    }
    
    // 3D effects for cards
    function init3DEffects() {
        const cards = document.querySelectorAll('.mainbox1, .mainbox2, .project-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }
    
    // Loading animation
    function initLoadingAnimation() {
        // Create loading screen
        const loadingScreen = document.createElement('div');
        loadingScreen.id = 'loadingScreen';
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <h2>Loading Amazing Portfolio...</h2>
                <div class="loading-progress">
                    <div class="loading-bar"></div>
                </div>
            </div>
        `;
        
        // Add loading styles
        const loadingStyles = `
            #loadingScreen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #0f172a 0%, #1a202c 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                transition: opacity 0.5s ease;
            }
            
            .loading-content {
                text-align: center;
                color: white;
            }
            
            .loading-spinner {
                width: 60px;
                height: 60px;
                border: 4px solid rgba(99, 102, 241, 0.2);
                border-top: 4px solid #6366f1;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .loading-progress {
                width: 200px;
                height: 4px;
                background: rgba(99, 102, 241, 0.2);
                border-radius: 2px;
                overflow: hidden;
                margin: 20px auto;
            }
            
            .loading-bar {
                height: 100%;
                background: linear-gradient(90deg, #6366f1, #8b5cf6);
                width: 0%;
                animation: loading 2s ease-in-out forwards;
            }
            
            @keyframes loading {
                0% { width: 0%; }
                100% { width: 100%; }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = loadingStyles;
        document.head.appendChild(styleSheet);
        
        document.body.appendChild(loadingScreen);
        
        // Remove loading screen after animation
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 2500);
    }
    
    // Form validation and enhancement
    const contactForm = document.querySelector('form[action*="mailto"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Create mailto link with pre-filled content
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:vaibhavsingh273010@gmail.com?subject=${subject}&body=${body}`;
            
            window.location.href = mailtoLink;
            showNotification('Opening email client...', 'success');
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        const notificationStyles = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                color: white;
                font-weight: 500;
                z-index: 10001;
                transform: translateX(400px);
                transition: transform 0.3s ease;
            }
            
            .notification-success {
                background: linear-gradient(135deg, #10b981, #059669);
            }
            
            .notification-error {
                background: linear-gradient(135deg, #ef4444, #dc2626);
            }
            
            .notification-info {
                background: linear-gradient(135deg, #6366f1, #4f46e5);
            }
        `;
        
        if (!document.querySelector('#notification-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'notification-styles';
            styleSheet.textContent = notificationStyles;
            document.head.appendChild(styleSheet);
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit') return;
            
            this.style.transform = 'scale(0.95)';
            createSparkles(this);
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Create sparkle effects
    function createSparkles(element) {
        const rect = element.getBoundingClientRect();
        const sparkleCount = 8;
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            const angle = (i / sparkleCount) * Math.PI * 2;
            const distance = 50 + Math.random() * 30;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            sparkle.style.left = (rect.left + rect.width / 2 + x) + 'px';
            sparkle.style.top = (rect.top + rect.height / 2 + y) + 'px';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
    // Add ripple effect to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple styles
    const rippleStyles = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    const rippleStyleSheet = document.createElement('style');
    rippleStyleSheet.textContent = rippleStyles;
    document.head.appendChild(rippleStyleSheet);
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.firstsection');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.3;
            heroSection.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Add magnetic effect to cards
    const magneticElements = document.querySelectorAll('.mainbox1, .mainbox2, .project-card');
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
    
    // Add mouse trail effect
    let mouseTrail = [];
    const maxTrailLength = 20;
    
    document.addEventListener('mousemove', (e) => {
        mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        if (mouseTrail.length > maxTrailLength) {
            mouseTrail.shift();
        }
        
        // Create trail dots
        const trailDot = document.createElement('div');
        trailDot.style.position = 'fixed';
        trailDot.style.left = e.clientX + 'px';
        trailDot.style.top = e.clientY + 'px';
        trailDot.style.width = '4px';
        trailDot.style.height = '4px';
        trailDot.style.background = 'rgba(99, 102, 241, 0.6)';
        trailDot.style.borderRadius = '50%';
        trailDot.style.pointerEvents = 'none';
        trailDot.style.zIndex = '9997';
        trailDot.style.transition = 'opacity 0.5s ease';
        
        document.body.appendChild(trailDot);
        
        setTimeout(() => {
            trailDot.style.opacity = '0';
            setTimeout(() => {
                trailDot.remove();
            }, 500);
        }, 100);
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Press 'T' for theme toggle
        if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.altKey) {
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.click();
            }
        }
        
        // Press 'H' for home
        if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.altKey) {
            window.location.href = '#home';
        }
        
        // Press 'P' for projects
        if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.altKey) {
            window.location.href = './project.html';
        }
        
        // Press 'C' for contact
        if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.altKey) {
            window.location.href = './contact.html';
        }
    });
    
    // Add confetti effect on page load
    function createConfetti() {
        const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9996';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = `confettiFall ${2 + Math.random() * 3}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    // Add confetti animation
    const confettiStyles = `
        @keyframes confettiFall {
            0% {
                transform: translateY(-10px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    
    const confettiStyleSheet = document.createElement('style');
    confettiStyleSheet.textContent = confettiStyles;
    document.head.appendChild(confettiStyleSheet);
    
    // Welcome message removed
    
    console.log('🚀 Advanced Portfolio loaded successfully!');
    console.log('💡 Keyboard shortcuts: T (theme), H (home), P (projects), C (contact)');
});