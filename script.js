// DOM Elements
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');
const skillBars = document.querySelectorAll('.skill-progress');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.querySelector('.submit-btn');

// Mouse Cursor Animation
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Navigation Active State
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 400) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll for Nav Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
            // Animate skill bars
            if (entry.target.querySelector('.skill-progress')) {
                setTimeout(() => {
                    skillBars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-width');
                    });
                }, index * 200);
            }
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

sections.forEach(section => observer.observe(section));

// Contact Form Handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        project: document.getElementById('project').value,
        message: document.getElementById('message').value
    };

    // UI Feedback
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Here you would send to EmailJS or your backend
        console.log('📧 Form Data:', formData);
        
        // Success feedback
        submitBtn.textContent = 'Sent! 🎉';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// Button Hover Effects
document.querySelectorAll('.btn-primary, .hire-btn, .service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(2)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Project Card Hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        // Simulate project modal or link
        alert('🔥 Full project coming soon!\n📧 Email: arsalanalihashmi7@gmail.com\n📞 Call: 03332110172');
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio Loaded Successfully!');
    console.log('📧 Email: arsalanalihashmi7@gmail.com');
    console.log('📞 Phone: 03332110172');
    console.log('💼 Upwork/Fiverr ready!');
});
