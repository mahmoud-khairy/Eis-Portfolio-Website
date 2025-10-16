// First, add GSAP to your HTML file:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations - OPTIMIZED
const heroAnimation = () => {
  const tl = gsap.timeline();

  // Animate main title
  tl.from('.main-title', {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
    // Animate subtitle - FIXED
    .from('.subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'all', // Clear all GSAP properties after animation
      onComplete: function () {
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) {
          // Force clear all inline styles
          gsap.set(subtitle, { clearProps: 'all' });
          subtitle.style.opacity = '1';
          subtitle.style.visibility = 'visible';
        }
      }
    }, '-=0.4')
    // Animate hero icons
    .from('.icon-wrapper', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.3');

  // Removed continuous floating animation for performance
  // CSS animation handles this more efficiently

  // Enhanced fallback mechanism
  setTimeout(() => {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
      gsap.set(subtitle, { clearProps: 'all' });
      subtitle.style.opacity = '1';
      subtitle.style.visibility = 'visible';
      subtitle.style.transform = 'none';
    }
  }, 1500);
};

// Introduction Section Animations
const introductionAnimation = () => {
  const introText = document.querySelector('.intro-text');
  if (introText) {
    gsap.from(introText, {
      scrollTrigger: {
        trigger: '.introduction',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }

  const goalsSvg = document.querySelector('.goals-svg');
  if (goalsSvg) {
    gsap.from(goalsSvg, {
      scrollTrigger: {
        trigger: '.introduction',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }

  // Animate video cards - OPTIMIZED
  const videoCards = document.querySelectorAll('.video-card');
  if (videoCards.length > 0) {
    gsap.from(videoCards, {
      scrollTrigger: {
        trigger: '.video-showcase',
        start: 'top center+=100',
        toggleActions: 'play none none none',
        once: true // Only animate once for performance
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    });
  }
};

// Skills Section Floating Cards - OPTIMIZED
const skillsAnimation = () => {
  // Removed continuous floating animations to improve performance
  // Cards will only animate on scroll trigger
  const cards = document.querySelectorAll('.skill-category');

  if (cards.length > 0) {
    gsap.from(cards, {
      scrollTrigger: {
        trigger: '.skills',
        start: 'top center',
        toggleActions: 'play none none none',
        once: true // Only animate once
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out'
    });
  }
};

// Timeline Animation
const timelineAnimation = () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length > 0) {
    // Set initial state
    gsap.set(timelineItems, { opacity: 1, x: 0 });

    // Animate on scroll
    gsap.from(timelineItems, {
      scrollTrigger: {
        trigger: '.education-experience',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: (index) => index % 2 === 0 ? 100 : -100,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out'
    });
  }
};

// Projects Hover Effect
const projectsAnimation = () => {
  const projects = document.querySelectorAll('.project-card');

  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      gsap.to(project, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    project.addEventListener('mouseleave', () => {
      gsap.to(project, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
};

// Add these CSS animations to your existing CSS file
const newStyles = `
/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Add this class to elements you want to float */
.floating {
  animation: float 3s ease-in-out infinite;
}

/* Gradient Animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Add to elements for gradient animation */
.gradient-bg {
  background: linear-gradient(-45deg, var(--gold-dark), var(--gold), var(--gold-light));
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

/* Glow Effect */
.glow {
  position: relative;
}

.glow::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 30px var(--gold);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glow:hover::after {
  opacity: 0.5;
}

/* Parallax Effect */
.parallax {
  transform: translateZ(0);
  transition: transform 0.3s ease;
}

/* Typing Effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

.typing-effect {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--gold);
  animation: 
    typing 3.5s steps(40, end),
    blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--gold) }
}
`;

// Enhanced PhD-Level Animations
const initializeAdvancedAnimations = () => {
  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.swot-card, .po-item, .highlight-card, .strategy-card, .insight-item, .pillar').forEach(el => {
    observer.observe(el);
  });

  // Enhanced rating bar animations
  const animateRatingBars = () => {
    const ratingBars = document.querySelectorAll('.rating-fill');
    ratingBars.forEach((bar, index) => {
      const width = bar.style.width;
      bar.style.width = '0%';

      setTimeout(() => {
        bar.style.width = width;
      }, index * 200);
    });
  };

  // Trigger rating animations when PO section is visible
  const poSection = document.querySelector('.po-attainment');
  if (poSection) {
    const poObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateRatingBars();
          poObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    poObserver.observe(poSection);
  }

  // Enhanced metric counter animation
  const animateMetrics = () => {
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
      const target = metric.textContent;
      const isPercentage = target.includes('%');
      const numericValue = parseInt(target.replace(/\D/g, ''));

      let current = 0;
      const increment = numericValue / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }
        metric.textContent = Math.floor(current) + (isPercentage ? '%' : '+');
      }, 40);
    });
  };

  // Trigger metric animations
  const conclusionSection = document.querySelector('.conclusion');
  if (conclusionSection) {
    const conclusionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateMetrics();
          conclusionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    conclusionObserver.observe(conclusionSection);
  }

  // Animate stats counter in achievements section
  const animateStatsCounter = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      let current = 0;
      const increment = target / 50;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
      }, 30);
    });
  };

  // Trigger stats animations when section is visible
  const statsSection = document.querySelector('.achievements-stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStatsCounter();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }
};

// Enhanced Projects Interactivity
const enhancedProjectsAnimation = () => {
  const projectCards = document.querySelectorAll('.project-card-enhanced');
  
  if (projectCards.length > 0) {
    console.log('Found', projectCards.length, 'project cards');
    
    // Force cards to be visible immediately
    projectCards.forEach((card) => {
      card.style.opacity = '1';
      card.style.visibility = 'visible';
      card.style.display = 'block';
    });
    
    // Simple hover effects
    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 40px rgba(196, 164, 103, 0.3)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      });
    });
  } else {
    console.log('No project cards found!');
  }
};

// Scroll to Top Button
const initScrollToTop = () => {
  // Create scroll to top button
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollBtn);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

// PhD-Level Page Loading Animation
const initPageLoader = () => {
  // Create loader
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-spinner"></div>
      <div class="loader-text">Loading Portfolio...</div>
    </div>
  `;
  document.body.appendChild(loader);
  
  // Add loader styles
  const loaderStyles = `
    .page-loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }
    
    .page-loader.hidden {
      opacity: 0;
      visibility: hidden;
    }
    
    .loader-content {
      text-align: center;
    }
    
    .loader-spinner {
      width: 60px;
      height: 60px;
      border: 4px solid rgba(196, 164, 103, 0.2);
      border-top-color: #C4A467;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1.5rem;
    }
    
    .loader-text {
      color: #C4A467;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 1px;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = loaderStyles;
  document.head.appendChild(styleSheet);
  
  // Hide loader after page loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }, 800);
  });
};

// Smooth Scroll Progress Indicator
const initScrollProgress = () => {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  
  const progressStyles = `
    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, #C4A467 0%, #D4AF37 50%, #E5C158 100%);
      z-index: 9999;
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 0.1s ease;
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = progressStyles;
  document.head.appendChild(styleSheet);
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight);
    progressBar.style.transform = `scaleX(${scrolled})`;
  });
};

// Advanced Parallax Scrolling
const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.project-card-enhanced, .skill-category-card, .experience-card');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.05;
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translateY(${yPos}px)`;
      }
    });
  });
};

// Floating Particles Background
const initFloatingParticles = () => {
  const canvas = document.createElement('canvas');
  canvas.className = 'particles-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  `;
  document.body.prepend(canvas);
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  const particleCount = 50;
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
      ctx.fillStyle = `rgba(196, 164, 103, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    // Draw connections
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach(b => {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.strokeStyle = `rgba(196, 164, 103, ${0.1 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
};

// Custom Cursor Trail Effect
const initCursorTrail = () => {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  
  const cursorStyles = `
    .custom-cursor {
      position: fixed;
      width: 40px;
      height: 40px;
      border: 2px solid rgba(196, 164, 103, 0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.15s ease, opacity 0.15s ease;
      opacity: 0;
    }
    
    .cursor-dot {
      position: fixed;
      width: 8px;
      height: 8px;
      background: #C4A467;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      opacity: 0;
    }
    
    .custom-cursor.active {
      transform: scale(1.5);
      border-color: #D4AF37;
    }
    
    @media (max-width: 768px) {
      .custom-cursor, .cursor-dot {
        display: none;
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = cursorStyles;
  document.head.appendChild(styleSheet);
  
  document.body.appendChild(cursor);
  document.body.appendChild(cursorDot);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let dotX = 0, dotY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = '1';
    cursorDot.style.opacity = '1';
  });
  
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorDot.style.opacity = '0';
  });
  
  // Hover effects on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-card-enhanced, .skill-category-card');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;
    
    cursor.style.left = cursorX - 20 + 'px';
    cursor.style.top = cursorY - 20 + 'px';
    cursorDot.style.left = dotX - 4 + 'px';
    cursorDot.style.top = dotY - 4 + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
};

// Animated Section Dividers
const initSectionDividers = () => {
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, index) => {
    if (index < sections.length - 1) {
      const divider = document.createElement('div');
      divider.className = 'section-divider';
      divider.innerHTML = `
        <div class="divider-line"></div>
        <div class="divider-icon">
          <i class="fas fa-star"></i>
        </div>
        <div class="divider-line"></div>
      `;
      section.appendChild(divider);
    }
  });
  
  const dividerStyles = `
    .section-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin: 4rem 0;
      opacity: 0.6;
    }
    
    .divider-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(196, 164, 103, 0.5), transparent);
    }
    
    .divider-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #C4A467 0%, #D4AF37 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0A0A0A;
      font-size: 1rem;
      animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(196, 164, 103, 0.7);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(196, 164, 103, 0);
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = dividerStyles;
  document.head.appendChild(styleSheet);
};

// Typing Animation for Hero Text
const initTypingAnimation = () => {
  const subtitle = document.querySelector('.subtitle');
  if (!subtitle) return;
  
  const text = subtitle.textContent;
  subtitle.textContent = '';
  subtitle.style.opacity = '1';
  
  let index = 0;
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '|';
  cursor.style.cssText = 'animation: blink 0.7s infinite; color: #C4A467;';
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `;
  document.head.appendChild(styleSheet);
  
  function type() {
    if (index < text.length) {
      subtitle.textContent += text.charAt(index);
      subtitle.appendChild(cursor);
      index++;
      setTimeout(type, 80);
    } else {
      setTimeout(() => cursor.remove(), 2000);
    }
  }
  
  setTimeout(type, 1000);
};

// Animated Skill Bars on Scroll
const initSkillBarAnimations = () => {
  const skillBars = document.querySelectorAll('.skill-bar');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => observer.observe(bar));
};

// Number Counter Animation
const initNumberCounters = () => {
  const counters = document.querySelectorAll('.stat-number, .metric-value');
  
  const animateCounter = (element) => {
    const target = parseFloat(element.getAttribute('data-target') || element.textContent);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    
    updateCounter();
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
};

// 3D Tilt Effect on Cards
const init3DTilt = () => {
  const cards = document.querySelectorAll('.project-card-enhanced, .skill-category-card, .testimonial-card');
  
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
};

// Keyboard Shortcuts
const initKeyboardShortcuts = () => {
  const shortcuts = {
    'h': () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    'p': () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }),
    's': () => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }),
    'c': () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }),
    'ArrowUp': () => window.scrollBy({ top: -100, behavior: 'smooth' }),
    'ArrowDown': () => window.scrollBy({ top: 100, behavior: 'smooth' })
  };
  
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    const action = shortcuts[e.key];
    if (action) {
      e.preventDefault();
      action();
    }
  });
  
  // Show keyboard shortcuts hint
  const hint = document.createElement('div');
  hint.className = 'keyboard-hint';
  hint.innerHTML = `
    <div class="hint-content">
      <strong>⌨️ Keyboard Shortcuts:</strong>
      <span>H - Home</span>
      <span>P - Projects</span>
      <span>S - Skills</span>
      <span>C - Contact</span>
    </div>
  `;
  
  const hintStyles = `
    .keyboard-hint {
      position: fixed;
      bottom: 100px;
      right: 30px;
      background: rgba(10, 10, 10, 0.95);
      border: 2px solid rgba(196, 164, 103, 0.3);
      border-radius: 12px;
      padding: 1rem 1.5rem;
      z-index: 999;
      opacity: 0;
      transform: translateX(400px);
      transition: all 0.4s ease;
      backdrop-filter: blur(10px);
    }
    
    .keyboard-hint.show {
      opacity: 1;
      transform: translateX(0);
    }
    
    .hint-content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      color: #C4A467;
      font-size: 0.85rem;
    }
    
    .hint-content strong {
      color: #D4AF37;
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
      .keyboard-hint {
        display: none;
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = hintStyles;
  document.head.appendChild(styleSheet);
  document.body.appendChild(hint);
  
  // Show hint briefly on load
  setTimeout(() => {
    hint.classList.add('show');
    setTimeout(() => hint.classList.remove('show'), 5000);
  }, 3000);
};

// Animated Background Gradient
const initAnimatedBackground = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  let hue = 0;
  
  function animateGradient() {
    hue = (hue + 0.1) % 360;
    const color1 = `hsl(${hue}, 20%, 5%)`;
    const color2 = `hsl(${(hue + 30) % 360}, 20%, 10%)`;
    
    hero.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color1} 100%)`;
    
    requestAnimationFrame(animateGradient);
  }
  
  // Uncomment to enable (subtle effect)
  // animateGradient();
};

// Easter Egg - Konami Code
const initEasterEgg = () => {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
  
  function activateEasterEgg() {
    const message = document.createElement('div');
    message.className = 'easter-egg';
    message.innerHTML = `
      <div class="egg-content">
        <h2>🎉 You Found the Secret! 🎉</h2>
        <p>Congratulations! You discovered the Konami Code!</p>
        <p style="font-size: 3rem; margin: 1rem 0;">🚀✨🎓</p>
        <button class="close-egg">Close</button>
      </div>
    `;
    
    const eggStyles = `
      .easter-egg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.5s ease;
      }
      
      .egg-content {
        background: linear-gradient(135deg, #C4A467 0%, #D4AF37 100%);
        padding: 3rem;
        border-radius: 20px;
        text-align: center;
        color: #0A0A0A;
        animation: bounceIn 0.6s ease;
      }
      
      .egg-content h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      
      .close-egg {
        background: #0A0A0A;
        color: #D4AF37;
        border: none;
        padding: 0.75rem 2rem;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        margin-top: 1rem;
        transition: transform 0.3s ease;
      }
      
      .close-egg:hover {
        transform: scale(1.1);
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes bounceIn {
        0% { transform: scale(0); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = eggStyles;
    document.head.appendChild(styleSheet);
    document.body.appendChild(message);
    
    message.querySelector('.close-egg').addEventListener('click', () => {
      message.remove();
    });
  }
};

// Smooth Reveal on Scroll
const initSmoothReveal = () => {
  const elements = document.querySelectorAll('.swot-card, .po-item, .achievement-item, .experience-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
  // Initialize page loader
  initPageLoader();
  
  // Initialize scroll progress
  initScrollProgress();
  
  // Initialize new advanced features
  initFloatingParticles();
  initCursorTrail();
  initSectionDividers();
  initParallaxEffect();
  
  // Initialize ULTRA advanced features
  initTypingAnimation();
  initSkillBarAnimations();
  initNumberCounters();
  init3DTilt();
  initKeyboardShortcuts();
  initAnimatedBackground();
  initEasterEgg();
  initSmoothReveal();
  
  // Add a small delay to ensure all elements are rendered
  setTimeout(() => {
    heroAnimation();
    introductionAnimation();
    skillsAnimation();
    timelineAnimation();
    projectsAnimation();
    enhancedProjectsAnimation();
    initializeAdvancedAnimations();
    initScrollToTop();
  }, 100);
});


document.addEventListener('DOMContentLoaded', () => {
  // HEAVILY OPTIMIZED - Removed most background animations for performance
  // Only keeping minimal, essential animations
  
  // Removed background rect rotation - too heavy
  // Removed complex shape animations - causing lag
  
  // Simple, lightweight opacity animation for shapes only
  const shapes = document.querySelectorAll('.shape');
  if (shapes.length > 0 && shapes.length < 10) { // Limit to prevent lag
    shapes.forEach((shape, index) => {
      if (index < 5) { // Only animate first 5 shapes
        gsap.to(shape, {
          opacity: gsap.utils.random(0.05, 0.15),
          duration: gsap.utils.random(4, 6),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });
      }
    });
  }

  // Performance optimization - reduce frame rate for smoother performance
  gsap.ticker.fps(30);
  gsap.ticker.lagSmoothing(500, 16);
});


// nav bar 

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Close menu when clicking a link and smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');

    // Smooth scroll to section
    const href = link.getAttribute('href');
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
// Improvement Strategy Navigation
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const actionSections = document.querySelectorAll('.action-section');

  if (navButtons.length > 0 && actionSections.length > 0) {
    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        // Remove active class from all buttons and sections
        navButtons.forEach(btn => btn.classList.remove('active'));
        actionSections.forEach(section => section.classList.remove('active'));

        // Add active class to clicked button and corresponding section
        button.classList.add('active');
        const targetSection = document.getElementById(target);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      });
    });
  }
});