import { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 48;
const PARTICLE_COLOR = 'rgba(99,102,241,0.7)'; // blue-500/violet-500
const LINE_COLOR = 'rgba(59,130,246,0.18)'; // blue-400
const PARTICLE_RADIUS = 2.5;
const LINE_DISTANCE = 120;

type Particle = { x: number; y: number; vx: number; vy: number };

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Initialize particles
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      vx: randomBetween(-0.3, 0.3),
      vy: randomBetween(-0.3, 0.3),
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DISTANCE) {
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 1.2 - dist / LINE_DISTANCE;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // Draw particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles.current[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, PARTICLE_RADIUS, 0, 2 * Math.PI);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.shadowColor = '#6366f1';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function update() {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      // Reposition particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.current[i].x = randomBetween(0, width);
        particles.current[i].y = randomBetween(0, height);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  );
} 