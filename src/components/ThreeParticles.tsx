"use client";

import { useEffect, useRef } from "react";

export default function ThreeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let frameId: number;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      const THREE = await import("three");

      const w = window.innerWidth;
      const h = canvas.parentElement?.offsetHeight ?? window.innerHeight;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
      camera.position.z = 8;

      // Primary particles
      const count = 220;
      const positions = new Float32Array(count * 3);
      const speeds = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 26;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
        speeds[i] = 0.002 + Math.random() * 0.004;
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: 0x4a7c2a,
        size: 0.07,
        transparent: true,
        opacity: 0.45,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // Secondary larger accent particles
      const count2 = 40;
      const pos2 = new Float32Array(count2 * 3);
      for (let i = 0; i < count2; i++) {
        pos2[i * 3] = (Math.random() - 0.5) * 22;
        pos2[i * 3 + 1] = (Math.random() - 0.5) * 14;
        pos2[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }
      const geo2 = new THREE.BufferGeometry();
      geo2.setAttribute("position", new THREE.BufferAttribute(pos2, 3));
      const mat2 = new THREE.PointsMaterial({
        color: 0x9ec468,
        size: 0.13,
        transparent: true,
        opacity: 0.25,
        sizeAttenuation: true,
      });
      const points2 = new THREE.Points(geo2, mat2);
      scene.add(points2);

      const posArr = geometry.attributes.position.array as Float32Array;

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        for (let i = 0; i < count; i++) {
          posArr[i * 3 + 1] += speeds[i];
          if (posArr[i * 3 + 1] > 9) posArr[i * 3 + 1] = -9;
        }
        geometry.attributes.position.needsUpdate = true;
        points.rotation.y += 0.0003;
        points2.rotation.y -= 0.0002;
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        const w2 = window.innerWidth;
        const h2 = canvas.parentElement?.offsetHeight ?? window.innerHeight;
        camera.aspect = w2 / h2;
        camera.updateProjectionMatrix();
        renderer.setSize(w2, h2);
      };
      window.addEventListener("resize", onResize);

      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("resize", onResize);
        geometry.dispose();
        material.dispose();
        geo2.dispose();
        mat2.dispose();
        renderer.dispose();
      };
    };

    const cleanupPromise = init();
    return () => {
      cleanupPromise.then((fn) => fn && fn());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -5 }}
    />
  );
}
