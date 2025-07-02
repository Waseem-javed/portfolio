"use client";

import { useEffect, useRef } from "react";

const STAR_COLORS = [
  "#FFFFFF",
  "#FFD700",
  "#87CEEB",
  "#FFA07A",
  "#FF69B4",
  "#00FFFF",
];

const STAR_COUNT = 20;

export function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
      const opacity = Math.random() * 0.8 + 0.2;
      const rotation = Math.random() * 360;
      const twinkleSpeed = Math.random() * 0.05 + 0.08;

      star.style.position = "absolute";
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = opacity.toString();
      star.style.transform = `rotate(${rotation}deg)`;
      star.style.borderRadius = "50%";
      star.style.backgroundColor = color;
      star.style.boxShadow = `0 0 ${size * 4}px ${size * 2}px ${color}`;
      star.style.transition = "none";
      star.dataset.twinkleSpeed = twinkleSpeed.toString();
      star.dataset.rotation = rotation.toString();
      star.dataset.opacity = opacity.toString();
      stars.push(star);
      container.appendChild(star);
    }

    let lastTime = performance.now();
    let animationFrameId: number;

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      stars.forEach((star) => {
        const speed = parseFloat(star.dataset.twinkleSpeed || "0.1");
        let opacity = parseFloat(star.dataset.opacity || "0.5");
        let rotation = parseFloat(star.dataset.rotation || "0");

        // Twinkle effect
        opacity += Math.sin(time * speed) * 0.1;
        opacity = Math.max(0.1, Math.min(1, opacity));
        star.style.opacity = opacity.toString();

        // Rotation
        rotation = (rotation + deltaTime * 0.08) % 360;
        star.style.transform = `rotate(${rotation}deg)`;

        // Save for next frame
        star.dataset.rotation = rotation.toString();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      stars.forEach((star) => container.removeChild(star));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#1b1b0f] via-[#0a0a3f] to-[#0a0a1f]"
    />
  );
}
