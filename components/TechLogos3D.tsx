'use client';

import React, { useEffect, useState } from 'react';
import styles from './TechLogos3D.module.css';

// Technology logos with their paths
const techLogos = [
  {
    name: 'Next.js',
    path: '/logos/nextjs.svg',
    position: { x: 15, y: 20 },
    speed: 6,
    size: 80,
    delay: 0,
    rotation: 15
  },
  {
    name: 'React',
    path: '/logos/react.svg',
    position: { x: 75, y: 30 },
    speed: 8,
    size: 90,
    delay: 1,
    rotation: 20
  },
  {
    name: 'Django',
    path: '/logos/django.svg',
    position: { x: 25, y: 70 },
    speed: 7,
    size: 85,
    delay: 0.5,
    rotation: 18
  },
  {
    name: 'FastAPI',
    path: '/logos/fastapi.svg',
    position: { x: 85, y: 65 },
    speed: 9,
    size: 75,
    delay: 1.5,
    rotation: 16
  },
  {
    name: 'Node.js',
    path: '/logos/nodejs.svg',
    position: { x: 50, y: 40 },
    speed: 7,
    size: 80,
    delay: 2,
    rotation: 14
  },
  {
    name: 'Python',
    path: '/logos/python.svg',
    position: { x: 40, y: 80 },
    speed: 8,
    size: 85,
    delay: 0.8,
    rotation: 22
  },
  {
    name: 'AI/ML',
    path: '/logos/ai.svg',
    position: { x: 70, y: 15 },
    speed: 6,
    size: 95,
    delay: 1.2,
    rotation: 17
  },
  {
    name: 'OpenAI',
    path: '/logos/openai.svg',
    position: { x: 60, y: 60 },
    speed: 9,
    size: 80,
    delay: 0.3,
    rotation: 19
  }
];

export default function TechLogos3D() {
  const [mounted, setMounted] = useState(false);

  // Only render on client side to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      {techLogos.map((logo) => (
        <div
          key={logo.name}
          className={styles.logoWrapper}
          style={{
            left: `${logo.position.x}%`,
            top: `${logo.position.y}%`,
            animationDelay: `${logo.delay}s`,
            animationDuration: `${logo.speed}s`,
          }}
        >
          <div
            className={styles.logo}
            style={{
              width: `${logo.size}px`,
              height: `${logo.size}px`,
              animationDuration: `${logo.rotation}s`
            }}
          >
            <img
              src={logo.path}
              alt={logo.name}
              width={logo.size}
              height={logo.size}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
