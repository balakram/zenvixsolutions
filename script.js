// Security restrictions and feature enhancements

// Disable common shortcuts and developer tools
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        return false;
    }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
});

// Disable text selection
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
    return false;
});
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
    return false;
});

// Console warning
console.clear();
console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
console.log('%cThis is a browser feature intended for developers. Content is protected by copyright.', 'color: red; font-size: 16px;');
console.log('%cDeveloped by Balakram Tudu', 'color: #667eea; font-size: 14px; font-weight: bold;');

// Mobile menu toggle (now attached to the right element)
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});



// Enhanced header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling and auto-close mobile nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

//Footer  date aumation 
document.addEventListener('DOMContentLoaded', function() {
  var yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});



// Enhanced form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Show loading state
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        alert(`Thank you ${data.name}! Your message has been sent. We'll get back to you soon!`);
        event.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Attach form handler to forms with .contact-form
document.querySelectorAll('.contact-form form').forEach(form => {
    form.addEventListener('submit', handleSubmit);
});

// Enhanced scroll animations for cards and feature items
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe animated elements
document.querySelectorAll('.service-card, .portfolio-item, .feature-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(item);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 60) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) typeWriter(heroTitle, heroTitle.textContent, 60);

    // Add floating animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.animation = 'none';
            setTimeout(() => {
                ctaButton.style.animation = 'float 3s ease-in-out infinite';
            }, 10);
        }, 5000);
    }

    // Particle effect in hero (optional visual polish)
    function createParticles() {
        const hero = document.querySelector('.hero');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;height: 2px;
                background: rgba(255,255,255,0.5);
                border-radius: 50%;
                animation: float-particle ${Math.random() * 3 + 2}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            hero.appendChild(particle);
        }
    }
    createParticles();
});

//Privecy and Term and Condition
    document.querySelectorAll('.faq-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        content.classList.toggle('active');
      });
    });
// Block f12
document.addEventListener('keydown', function(e) {
  // Block F12
  if (e.key === 'F12' || e.keyCode === 123) {
    e.preventDefault();
    return false;
  }
});
