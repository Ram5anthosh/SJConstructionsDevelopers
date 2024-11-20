// Initialize OpenStreetMap
const map = L.map('map').setView([35.6895, 139.6917], 13); // Replace with your town's coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

// Add Markers for Properties
const properties = [
  {
    name: 'Building 1',
    lat: 35.6895,
    lng: 139.692,
    description: 'A modern apartment complex with stunning city views.',
    image: 'building1.jpg',
  },
  {
    name: 'Building 2',
    lat: 35.688,
    lng: 139.69,
    description: 'A luxurious villa designed for comfort and elegance.',
    image: 'building2.jpg',
  },
  {
    name: 'Building 3',
    lat: 35.687,
    lng: 139.693,
    description: 'A bustling commercial space perfect for businesses.',
    image: 'building3.jpg',
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
