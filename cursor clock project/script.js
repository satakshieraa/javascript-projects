// --- 3D Universe Setup ---
const canvas = document.getElementById('universe');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x181a2a, 1);

const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 18);

// --- Create a circular glowing star texture ---
function createStarTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
  gradient.addColorStop(0.4, 'rgba(200,200,255,0.3)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
  ctx.fill();
  return new THREE.CanvasTexture(canvas);
}
const starTexture = createStarTexture();

// --- Galaxy Stars ---
const starCount = 2000;
const starGeometry = new THREE.BufferGeometry();
const starPositions = [];
const starColors = [];
const color = new THREE.Color();

for (let i = 0; i < starCount; i++) {
  // Galaxy disc distribution
  const radius = 45 * Math.pow(Math.random(), 1.5);
  const angle = Math.random() * 2 * Math.PI;
  const height = (Math.random() - 0.5) * 8 * Math.pow(1 - radius / 45, 2);
  starPositions.push(
    Math.cos(angle) * radius,
    height,
    Math.sin(angle) * radius
  );
  // Color: mostly white, some blue, purple, yellow
  if (Math.random() < 0.85) {
    color.setHSL(0.6 + Math.random() * 0.1, 0.1 + Math.random() * 0.2, 0.8 + Math.random() * 0.2); // white/blue
  } else if (Math.random() < 0.5) {
    color.setHSL(0.7 + Math.random() * 0.1, 0.5, 0.7); // purple
  } else {
    color.setHSL(0.13, 0.7, 0.8); // yellow
  }
  starColors.push(color.r, color.g, color.b);
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));

const starMaterial = new THREE.PointsMaterial({
  size: 0.18,
  map: starTexture,
  vertexColors: true,
  transparent: true,
  opacity: 0.95,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// --- Nebula (subtle background fog) ---
const fogColor = new THREE.Color(0x181a2a);
scene.fog = new THREE.Fog(fogColor, 40, 90);
renderer.setClearColor(fogColor, 1);

// --- Animation Loop ---
function animate() {
  requestAnimationFrame(animate);
  // Slow galaxy rotation
  scene.rotation.y += 0.0005;
  renderer.render(scene, camera);
}
animate();

// --- Responsive ---
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// --- Minimalist Clock ---
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateStr = now.toLocaleDateString([], { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  document.getElementById('clock-time').textContent = timeStr;
  document.getElementById('clock-date').textContent = dateStr;
}
setInterval(updateClock, 1000);
updateClock();
