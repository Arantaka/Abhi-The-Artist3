
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
  
  // Add active class to current page in navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    }
  });
  
  // Social icon hover effects
  const socialIcons = document.querySelectorAll('.social-icon');
  
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      const svg = this.querySelector('svg');
      if (svg) {
        svg.classList.add('text-accent');
      }
    });
    
    icon.addEventListener('mouseleave', function() {
      const svg = this.querySelector('svg');
      if (svg) {
        svg.classList.remove('text-accent');
      }
    });
  });

  // Add lightbox functionality for gallery images
  setupLightbox();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Simple animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('animate');
    }
  });
};

// Initialize animations if elements exist
if (document.querySelector('.animate-on-scroll')) {
  window.addEventListener('scroll', animateOnScroll);
  // Initial check
  animateOnScroll();
}

// Setup lightbox functionality
function setupLightbox() {
  // Create lightbox elements if they don't exist
  if (!document.querySelector('.lightbox')) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-image';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '×';
    closeBtn.setAttribute('aria-label', 'Close lightbox');
    
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    // Close lightbox when clicking close button or outside the image
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
    
    // Close lightbox with escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
      }
    });
  }
  
  // Add click event to all gallery images
  const galleryItems = document.querySelectorAll('.card img, .gallery-item img, .featured-works img, .hero-portrait img');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-image');
  
  galleryItems.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      if (lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });
}
