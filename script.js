const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');

openBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
});

const closeMenuWithAnimation = () => {
    closeBtn.classList.add('animate');
    navMenu.classList.add('closing');
    setTimeout(() => {
        navMenu.classList.remove('active', 'closing');
        closeBtn.classList.remove('animate');
    }, 550);
};

closeBtn.addEventListener('click', closeMenuWithAnimation);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            closeMenuWithAnimation();
        }
    });
});

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(reveal => revealObserver.observe(reveal));

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').style.maxHeight = null;
        });
        
        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
