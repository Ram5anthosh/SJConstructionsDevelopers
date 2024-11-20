// Initialize OpenStreetMap
const map = L.map('map').setView([18.280316, 83.337033], 13); // Replace with your town's coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

// Add Markers for Properties
const properties = [
  {
    name: 'Building 1',
    lat: 18.281316,
    lng: 83.336033,
    description: 'A modern apartment complex with stunning city views.',
    image: 'assets/building1.jpg',
  },
  {
    name: 'Building 2',
    lat: 18.282316,
    lng: 83.337033,
    description: 'A luxurious villa designed for comfort and elegance.',
    image: 'assets/building2.jpg',
  },
  {
    name: 'Building 3',
    lat: 18.280316,
    lng: 83.334033,
    description: 'A bustling commercial space perfect for businesses.',
    image: 'assets/building3.jpg',
  },
];

properties.forEach((property) => {
  const marker = L.marker([property.lat, property.lng]).addTo(map);
  marker.bindPopup(`
    <div>
      <h3>${property.name}</h3>
      <img src="${property.image}" alt="${property.name}" style="width: 100%; height: auto; border-radius: 5px;">
      <p>${property.description}</p>
    </div>
  `);
});

// Animated Background
const canvas = document.getElementById('animated-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1,
  });
}

function animateBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
  requestAnimationFrame(animateBackground);
}

animateBackground();

function createSlideshow(slideshowId, prevButtonId, nextButtonId) {
    const slideshow = document.getElementById(slideshowId);
    const slides = slideshow.getElementsByClassName('slide');
    let currentIndex = 0;
  
    // Show the current slide and hide the others
    function showSlide(index) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
      slides[index].classList.add('active');
    }
  
    // Move to the next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    // Move to the previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    // Set up event listeners for buttons
    document.getElementById(nextButtonId).addEventListener('click', nextSlide);
    document.getElementById(prevButtonId).addEventListener('click', prevSlide);
  
    // Start automatic sliding
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }
  
  // Initialize the slideshows
  createSlideshow('property-slideshow', 'prev-property', 'next-property');
  createSlideshow('testimonial-slideshow', 'prev-testimonial', 'next-testimonial');
  