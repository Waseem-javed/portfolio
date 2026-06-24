"use client";

import { useEffect, useRef } from "react";

const DARK_STAR_COLORS = ["#FFFFFF", "#FFD700", "#87CEEB", "#FFA07A", "#FF69B4", "#00FFFF"];
const LIGHT_STAR_COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4", "#6366f1", "#a855f7"];
const STAR_COUNT = 20;

interface SpaceBackgroundProps {
  isDark: boolean;
}

export function SpaceBackground({ isDark }: SpaceBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const STAR_COLORS = isDark ? DARK_STAR_COLORS : LIGHT_STAR_COLORS;
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

        opacity += Math.sin(time * speed) * 0.1;
        opacity = Math.max(0.1, Math.min(1, opacity));
        star.style.opacity = opacity.toString();

        rotation = (rotation + deltaTime * 0.08) % 360;
        star.style.transform = `rotate(${rotation}deg)`;

        star.dataset.rotation = rotation.toString();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      stars.forEach((star) => container.removeChild(star));
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 -z-10 overflow-hidden transition-colors duration-700 ${
        isDark
          ? "bg-gradient-to-b from-[#0a0a14] via-[#090918] to-[#05050a]"
          : "bg-gradient-to-b from-[#dbeafe] via-[#eff6ff] to-[#f8faff]"
      }`}
    />
  );
}
