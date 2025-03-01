'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup with optimized settings
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0e7db');

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10 // Reduced far plane for better performance
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: window.devicePixelRatio < 2, // Only use antialiasing for lower pixel ratios
      powerPreference: "high-performance",
      stencil: false,
      depth: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap; // Using PCFShadowMap instead of PCFSoftShadowMap for better performance
    mountRef.current.appendChild(renderer.domElement);

    // Optimized lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024; // Reduced shadow map size
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 10;
    directionalLight.shadow.camera.left = -5;
    directionalLight.shadow.camera.right = 5;
    directionalLight.shadow.camera.top = 5;
    directionalLight.shadow.camera.bottom = -5;
    scene.add(directionalLight);

    // Add ground plane with optimized geometry
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 8),
      new THREE.MeshStandardMaterial({ 
        color: '#f0e7db',
        roughness: 1,
        metalness: 0
      })
    );
    plane.rotation.x = -Math.PI * 0.5;
    plane.position.y = -0.5;
    plane.receiveShadow = true;
    scene.add(plane);

    // Add desk with optimized geometry
    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.1, 1),
      new THREE.MeshStandardMaterial({ color: '#8b4513' })
    );
    desk.position.y = 0;
    desk.receiveShadow = true;
    desk.castShadow = true;
    scene.add(desk);

    // Add laptop with optimized geometries
    const laptop = new THREE.Group();
    
    const laptopBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.05, 0.5),
      new THREE.MeshStandardMaterial({ color: '#303030' })
    );
    laptopBase.position.y = 0.025;
    laptopBase.castShadow = true;
    
    const laptopScreen = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.5, 0.02),
      new THREE.MeshStandardMaterial({ color: '#303030' })
    );
    laptopScreen.position.y = 0.25;
    laptopScreen.position.z = -0.24;
    laptopScreen.rotation.x = -Math.PI * 0.15;
    laptopScreen.castShadow = true;
    
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 0.4),
      new THREE.MeshBasicMaterial({ 
        color: '#4a90e2',
        transparent: true,
        opacity: 0.9
      })
    );
    screen.position.y = 0.25;
    screen.position.z = -0.23;
    screen.rotation.x = -Math.PI * 0.15;
    
    laptop.add(laptopBase);
    laptop.add(laptopScreen);
    laptop.add(screen);
    laptop.position.y = 0.05;
    scene.add(laptop);

    // Create optimized dog model
    const dogGroup = new THREE.Group();
    
    // Body with reduced geometry
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.2, 0.4, 3, 6),
      new THREE.MeshStandardMaterial({ color: '#8B4513' })
    );
    body.rotation.z = Math.PI * 0.5;
    body.castShadow = true;
    dogGroup.add(body);

    // Head with reduced geometry
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 8, 8),
      new THREE.MeshStandardMaterial({ color: '#8B4513' })
    );
    head.position.x = 0.3;
    head.position.y = 0.1;
    head.castShadow = true;
    dogGroup.add(head);

    // Ears with reduced geometry
    const earGeometry = new THREE.ConeGeometry(0.06, 0.12, 3);
    const earMaterial = new THREE.MeshStandardMaterial({ color: '#8B4513' });

    const leftEar = new THREE.Mesh(earGeometry, earMaterial);
    leftEar.position.x = 0.35;
    leftEar.position.y = 0.25;
    leftEar.position.z = 0.06;
    leftEar.castShadow = true;
    dogGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeometry, earMaterial);
    rightEar.position.x = 0.35;
    rightEar.position.y = 0.25;
    rightEar.position.z = -0.06;
    rightEar.castShadow = true;
    dogGroup.add(rightEar);

    // Legs with reduced geometry
    const legGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.3, 6);
    const legMaterial = new THREE.MeshStandardMaterial({ color: '#8B4513' });

    const legs: THREE.Mesh[] = [];
    const legPositions = [
      { x: -0.15, z: 0.15 },
      { x: -0.15, z: -0.15 },
      { x: 0.15, z: 0.15 },
      { x: 0.15, z: -0.15 }
    ];

    legPositions.forEach(pos => {
      const leg = new THREE.Mesh(legGeometry, legMaterial);
      leg.position.set(pos.x, -0.15, pos.z);
      leg.castShadow = true;
      legs.push(leg);
      dogGroup.add(leg);
    });

    // Tail with reduced geometry
    const tail = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.2, 4),
      new THREE.MeshStandardMaterial({ color: '#8B4513' })
    );
    tail.position.x = -0.3;
    tail.position.y = 0.1;
    tail.rotation.z = Math.PI * 0.25;
    tail.castShadow = true;
    dogGroup.add(tail);

    // Position the dog
    dogGroup.position.set(0.4, 0.15, 0);
    dogGroup.rotation.y = -Math.PI * 0.25;
    scene.add(dogGroup);
    
    // Camera position
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);

    // Add OrbitControls with optimized settings
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1;
    controls.maxDistance = 5;
    controls.maxPolarAngle = Math.PI / 2;
    controls.update();

    // Handle window resize with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);

    // Animation loop with optimized performance
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      controls.update();
      
      const time = Date.now() * 0.001;
      
      // Optimized animations
      tail.rotation.y = Math.sin(time * 2) * 0.5;
      dogGroup.position.y = 0.15 + Math.sin(time) * 0.02;
      head.rotation.y = Math.sin(time * 0.5) * 0.2;
      head.position.y = 0.1 + Math.sin(time * 0.5) * 0.02;
      
      renderer.render(scene, camera);
    };

    // Start animation after everything is set up
    setIsLoading(false);
    animate();

    // Cleanup
    return () => {
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      
      // Dispose of geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f0e7db]">
          <div className="text-lg">Loading 3D Scene...</div>
        </div>
      )}
      <div ref={mountRef} className="canvas-container" />
    </>
  );
};

export default ThreeScene; 