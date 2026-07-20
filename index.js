/* =========================================
   NIMITech WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   PROGRESS BAR
========================================= */

function updateProgressBar() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    const progressBar =
        document.getElementById('progress-bar');

    if (progressBar) {

        progressBar.style.width = `${scrollPercentage}%`;

    }

}


window.addEventListener('scroll', updateProgressBar);


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const mainNav =
    document.getElementById('main-nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 40) {

        mainNav.classList.add('scrolled');

    } else {

        mainNav.classList.remove('scrolled');

    }

});


/* =========================================
   MOBILE MENU
========================================= */

function toggleMobileMenu() {

    const menu =
        document.getElementById('mobile-menu');

    menu.classList.toggle('open');

}


function closeMobileMenu() {

    const menu =
        document.getElementById('mobile-menu');

    menu.classList.remove('open');

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll('section[id]');

const navLinks =
    document.querySelectorAll('.nav-link');


window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute('id');

        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') === `#${currentSection}`
        ) {

            link.classList.add('active');

        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll('.reveal');


const revealObserver =
    new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.12

    });


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll('.counter');

let countersStarted = false;


function animateCounters() {

    if (countersStarted) return;

    const impactSection =
        document.querySelector('.impact-section');

    const sectionTop =
        impactSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        countersStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                target / 60;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            };

            updateCounter();

        });

    }

}


window.addEventListener('scroll', animateCounters);


/* =========================================
   SERVICE MODALS
========================================= */

const services = {

    products: {

        title: 'Digital Products',

        icon: 'fa-layer-group',

        description:
            'We design and build digital products that combine beautiful experiences with powerful technology.',

        features: [

            'Web applications',

            'Mobile applications',

            'E-commerce platforms',

            'Product design and UI/UX',

            'MVP development'

        ]

    },

    enterprise: {

        title: 'Enterprise Technology',

        icon: 'fa-building',

        description:
            'We simplify complex operations with reliable software, automation and modern cloud infrastructure.',

        features: [

            'Custom ERP systems',

            'Business automation',

            'Cloud infrastructure',

            'AI integration',

            'System modernisation'

        ]

    },

    growth: {

        title: 'Digital Growth',

        icon: 'fa-chart-line',

        description:
            'We help ambitious businesses use technology and strategy to attract more customers and grow sustainably.',

        features: [

            'Digital strategy',

            'Brand experience',

            'Marketing automation',

            'Conversion optimisation',

            'Ongoing product support'

        ]

    }

};


function openServiceModal(serviceKey) {

    const service =
        services[serviceKey];

    if (!service) return;

    document.getElementById('modal-service-title')
        .textContent = service.title;

    document.getElementById('modal-service-description')
        .textContent = service.description;

    document.getElementById('modal-service-icon')
        .innerHTML = `<i class="fa-solid ${service.icon}"></i>`;

    const list =
        document.getElementById('modal-service-list');

    list.innerHTML = service.features.map(feature => {

        return `
            <div>
                <i class="fa-solid fa-check"></i>
                <span>${feature}</span>
            </div>
        `;

    }).join('');

    openModal('service-modal');

}


/* =========================================
   PROJECT MODALS
========================================= */

const projects = {

    quickmart: {

        category: 'E-COMMERCE',

        title: 'QuickMart',

        description:
            'A modern e-commerce platform designed to help customers discover and purchase products with a faster and more intuitive shopping experience.',

        result:
            'Result: Improved customer experience and created a scalable digital commerce platform.'

    },

    edutrack: {

        category: 'EDUCATION TECHNOLOGY',

        title: 'EduTrack',

        description:
            'A complete school management platform helping educational institutions manage students, teachers, academic records and operations from one place.',

        result:
            'Result: Simplified school administration and improved access to important academic data.'

    },

    soko: {

        category: 'LOGISTICS',

        title: 'Soko',

        description:
            'A logistics management platform created to connect businesses, delivery teams and customers through a single digital experience.',

        result:
            'Result: Created better visibility across the delivery process and improved operational efficiency.'

    }

};


function openProjectModal(projectKey) {

    const project =
        projects[projectKey];

    if (!project) return;

    document.getElementById('modal-project-category')
        .textContent = project.category;

    document.getElementById('modal-project-title')
        .textContent = project.title;

    document.getElementById('modal-project-description')
        .textContent = project.description;

    document.getElementById('modal-project-result')
        .textContent = project.result;

    openModal('project-modal');

}


/* =========================================
   MODAL FUNCTIONS
========================================= */

function openModal(modalId) {

    const modal =
        document.getElementById(modalId);

    modal.classList.add('show');

    document.body.classList.add('modal-open');

}


function closeModal(modalId) {

    const modal =
        document.getElementById(modalId);

    modal.classList.remove('show');

    document.body.classList.remove('modal-open');

}


document.addEventListener('keydown', event => {

    if (event.key === 'Escape') {

        document.querySelectorAll('.modal.show')
            .forEach(modal => {

                closeModal(modal.id);

            });

    }

});


/* =========================================
   FAQ
========================================= */

function toggleFaq(button) {

    const item =
        button.parentElement;

    const answer =
        item.querySelector('.faq-answer');

    const isOpen =
        item.classList.contains('open');

    document.querySelectorAll('.faq-item.open')
        .forEach(openItem => {

            if (openItem !== item) {

                openItem.classList.remove('open');

                openItem.querySelector('.faq-answer')
                    .style.maxHeight = null;

            }

        });


    if (isOpen) {

        item.classList.remove('open');

        answer.style.maxHeight = null;

    } else {

        item.classList.add('open');

        answer.style.maxHeight =
            answer.scrollHeight + 'px';

    }

}


/* =========================================
   TESTIMONIAL SLIDER
========================================= */

const testimonials = [

    {

        text:
            "NimiTech didn't just build our app — they helped us completely rethink how we serve our customers. Revenue tripled in 6 months.",

        name: 'Aisha yamal',

        role: 'CEO, FreshFarm ',

        image: 'img/images.jpeg'

    },



];


let currentTestimonial = 0;


function renderTestimonial() {

    const testimonial =
        testimonials[currentTestimonial];

    const text =
        document.getElementById('testimonial-text');

    const name =
        document.getElementById('testimonial-name');

    const role =
        document.getElementById('testimonial-role');

    const image =
        document.getElementById('testimonial-image');


    text.style.opacity = 0;

    setTimeout(() => {

        text.textContent = testimonial.text;

        name.textContent = testimonial.name;

        role.textContent = testimonial.role;

        image.src = testimonial.image;

        text.style.opacity = 1;

    }, 200);

}


function changeTestimonial(direction) {

    currentTestimonial += direction;

    if (currentTestimonial < 0) {

        currentTestimonial =
            testimonials.length - 1;

    }

    if (currentTestimonial >= testimonials.length) {

        currentTestimonial = 0;

    }

    renderTestimonial();

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById('contact-form');


contactForm.addEventListener('submit', event => {

    event.preventDefault();

    const submitButton =
        contactForm.querySelector('.form-submit');

    const originalContent =
        submitButton.innerHTML;

    const firstName =
        document.getElementById('firstName').value.trim();

    const lastName =
        document.getElementById('lastName').value.trim();

    const email =
        document.getElementById('email').value.trim();

    const project =
        document.getElementById('project').value;

    const message =
        document.getElementById('message').value.trim();


    if (
        !firstName ||
        !lastName ||
        !email ||
        !project ||
        !message
    ) {

        showToast('Please complete all fields.');

        return;

    }


    submitButton.disabled = true;

    submitButton.innerHTML = `
        <span>
            <i class="fa-solid fa-spinner fa-spin"></i>
            Sending...
        </span>
    `;


    setTimeout(() => {

        submitButton.disabled = false;

        submitButton.innerHTML = originalContent;

        contactForm.reset();

        showToast(
            'Thank you! Our team will get back to you within 24 hours.'
        );

    }, 1800);

});


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    const toast =
        document.getElementById('toast');

    const toastMessage =
        document.getElementById('toast-message');

    toastMessage.textContent = message;

    toast.classList.add('show');

    setTimeout(() => {

        toast.classList.remove('show');

    }, 4000);

}


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById('back-to-top');


window.addEventListener('scroll', () => {

    if (window.scrollY > 600) {

        backToTop.classList.add('show');

    } else {

        backToTop.classList.remove('show');

    }

});


function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: 'smooth'

    });

}


/* =========================================
   CLOSE MOBILE MENU ON RESIZE
========================================= */

window.addEventListener('resize', () => {

    if (window.innerWidth > 1000) {

        closeMobileMenu();

    }

});


/* =========================================
   CONSOLE
========================================= */

console.log(
    '%cNimiTech Digital Experience Loaded ✨',
    'color:#0ea5e9;font-size:14px;font-weight:bold;'
);