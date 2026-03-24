'use client';

import { useEffect, useRef } from 'react';

class Particle {
  x: number;
  y: number;
  z: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.z = Math.random() * 100;
    this.baseSize = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.2;
    this.speedY = (Math.random() - 0.5) * 0.2 - 0.2;
    this.opacity = Math.random() * 0.6 + 0.1;
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = Math.random() * 0.02 + 0.01;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x += this.speedX + Math.sin(this.wobble) * 0.5;
    this.y += this.speedY;
    this.wobble += this.wobbleSpeed;

    if (this.y < -20) {
      this.y = this.canvasHeight + 20;
      this.x = Math.random() * this.canvasWidth;
    }
    if (this.x < -20) this.x = this.canvasWidth + 20;
    if (this.x > this.canvasWidth + 20) this.x = -20;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const scale = 100 / (100 + this.z);
    const size = this.baseSize * scale * (this.z < 20 ? 2 : 1);
    const blur = this.z < 20 ? 4 : this.z > 80 ? 2 : 0;
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
    
    const alpha = this.opacity * scale;
    ctx.fillStyle = `rgba(224, 191, 112, ${alpha})`;
    
    ctx.shadowBlur = blur + 10;
    ctx.shadowColor = `rgba(224, 191, 112, ${alpha * 0.8})`;
    
    ctx.fill();
  }
}

export default function GoldenDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const init = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 100 : 250;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      time += 0.005;
      
      // Reset shadow before drawing background
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';
      
      ctx.fillStyle = '#050403';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2 + Math.sin(time) * 100;
      const cy = canvas.height / 2 + Math.cos(time * 0.8) * 50;
      
      const gradient = ctx.createRadialGradient(
        cx, cy, 0,
        cx, cy, canvas.width * 0.7
      );
      gradient.addColorStop(0, 'rgba(40, 30, 15, 0.5)');
      gradient.addColorStop(0.5, 'rgba(15, 10, 5, 0.2)');
      gradient.addColorStop(1, 'rgba(5, 4, 3, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
