'use client';

import React, { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = 150;
    const colors = ['#6e56cf', '#8a70ff', '#a28dff'];

    // Particle class
    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      color: string;
      originalZ: number;

      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * 1000;
        this.originalZ = this.z;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.speedZ = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.z -= this.speedZ;

        // Reset particle when it goes out of screen
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width - canvas.width / 2;
          this.y = Math.random() * canvas.height - canvas.height / 2;
        }
      }

      draw() {
        if (!ctx) return;

        // 3D projection
        const scale = 400 / this.z;
        const x2d = this.x * scale + canvas.width / 2;
        const y2d = this.y * scale + canvas.height / 2;
        const radius = this.size * scale;

        // Only draw if particle is in view
        if (
          x2d + radius > 0 &&
          x2d - radius < canvas.width &&
          y2d + radius > 0 &&
          y2d - radius < canvas.height
        ) {
          // Opacity based on distance
          const opacity = Math.min(1, (1000 - this.z) / 1000);

          ctx.beginPath();
          ctx.arc(x2d, y2d, radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
          ctx.fill();
        }
      }
    }

    // Create particles
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    init();

    // Animation loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(10, 10, 10, 0.01)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Sort particles by z-depth
      particlesArray.sort((a, b) => b.z - a.z);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      // Connect particles with lines if they are close enough
      connectParticles();

      requestAnimationFrame(animate);
    }

    // Connect particles with lines if they are close enough
    function connectParticles() {
      if (!ctx) return;
      const maxDistance = 150;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          // 3D projection for both particles
          const scaleA = 400 / particlesArray[a].z;
          const x2dA = particlesArray[a].x * scaleA + canvas.width / 2;
          const y2dA = particlesArray[a].y * scaleA + canvas.height / 2;

          const scaleB = 400 / particlesArray[b].z;
          const x2dB = particlesArray[b].x * scaleB + canvas.width / 2;
          const y2dB = particlesArray[b].y * scaleB + canvas.height / 2;

          const dx = x2dA - x2dB;
          const dy = y2dA - y2dB;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Opacity based on distance and z-depth
            const opacity = (1 - distance / maxDistance) *
                           Math.min(1, (1000 - particlesArray[a].z) / 1000) *
                           Math.min(1, (1000 - particlesArray[b].z) / 1000);

            ctx.strokeStyle = `rgba(110, 86, 207, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x2dA, y2dA);
            ctx.lineTo(x2dB, y2dB);
            ctx.stroke();
          }
        }
      }
    }

    // Add mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let mouseRadius = 150;

    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        opacity: 0.6,
        background: 'var(--bg-primary)',
      }}
    />
  );
}
