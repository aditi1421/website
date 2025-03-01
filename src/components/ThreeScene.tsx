'use client';

import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const ThreeScene = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.height = '100%';
    document.getElementById('scene-container')?.appendChild(container);

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create LEGO minifigure
    const figure = new THREE.Group();

    // Legs
    const legsGeometry = new THREE.BoxGeometry(0.25, 0.4, 0.2);
    const legsMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000, // Black pants
      shininess: 100
    });
    const legs = new THREE.Mesh(legsGeometry, legsMaterial);
    legs.position.y = 0.2;
    figure.add(legs);

    // Body
    const bodyGeometry = new THREE.BoxGeometry(0.3, 0.4, 0.2);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000, // Black t-shirt
      shininess: 100
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.6;
    figure.add(body);

    // Create binary code pattern on shirt
    const shirtCanvas = document.createElement('canvas');
    shirtCanvas.width = 64;
    shirtCanvas.height = 64;
    const shirtCtx = shirtCanvas.getContext('2d');
    if (shirtCtx) {
      shirtCtx.fillStyle = '#000000';
      shirtCtx.fillRect(0, 0, 64, 64);
      shirtCtx.fillStyle = '#ffffff';
      shirtCtx.font = '8px monospace';
      for (let i = 0; i < 8; i++) {
        shirtCtx.fillText('01', 10, 8 + i * 8);
        shirtCtx.fillText('10', 30, 8 + i * 8);
        shirtCtx.fillText('01', 50, 8 + i * 8);
      }
    }
    const binaryTexture = new THREE.CanvasTexture(shirtCanvas);
    const binaryGeometry = new THREE.PlaneGeometry(0.25, 0.35);
    const binaryMaterial = new THREE.MeshBasicMaterial({
      map: binaryTexture,
      transparent: true,
      opacity: 0.7,
      color: 0xffffff
    });
    const binaryPattern = new THREE.Mesh(binaryGeometry, binaryMaterial);
    binaryPattern.position.set(0, 0.6, 0.11);
    figure.add(binaryPattern);

    // Create face texture
    const faceCanvas = document.createElement('canvas');
    faceCanvas.width = 256;
    faceCanvas.height = 256;
    const faceCtx = faceCanvas.getContext('2d');
    if (faceCtx) {
      // Background color (LEGO yellow)
      faceCtx.fillStyle = '#ffdd00';
      faceCtx.fillRect(0, 0, 256, 256);

      // Simple dot eyes
      faceCtx.fillStyle = '#000000';
      // Left eye
      faceCtx.beginPath();
      faceCtx.arc(85, 100, 8, 0, Math.PI * 2);
      faceCtx.fill();
      // Right eye
      faceCtx.beginPath();
      faceCtx.arc(170, 100, 8, 0, Math.PI * 2);
      faceCtx.fill();

      // Simple smile
      faceCtx.beginPath();
      faceCtx.strokeStyle = '#000000';
      faceCtx.lineWidth = 6;
      faceCtx.arc(128, 140, 35, 0.2, Math.PI - 0.2);
      faceCtx.stroke();
    }
    const faceTexture = new THREE.CanvasTexture(faceCanvas);

    // Head (cylindrical to match LEGO shape)
    const headGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.2, 32);
    const headMaterial = new THREE.MeshPhongMaterial({
      color: 0xffdd00, // LEGO yellow
      shininess: 100,
      map: faceTexture
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 0.9;
    head.rotation.y = Math.PI / 2; // Rotate to show face forward
    figure.add(head);

    // Glasses
    const glassesGeometry = new THREE.TorusGeometry(0.05, 0.015, 16, 32);
    const glassesMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000,
      shininess: 100
    });
    
    // Left lens
    const leftLens = new THREE.Mesh(glassesGeometry, glassesMaterial);
    leftLens.position.set(-0.07, 0.92, 0.12);
    leftLens.rotation.y = Math.PI / 2;
    figure.add(leftLens);

    // Right lens
    const rightLens = leftLens.clone();
    rightLens.position.x = 0.07;
    figure.add(rightLens);

    // Bridge of glasses
    const bridgeGeometry = new THREE.BoxGeometry(0.14, 0.015, 0.015);
    const bridge = new THREE.Mesh(bridgeGeometry, glassesMaterial);
    bridge.position.set(0, 0.92, 0.12);
    figure.add(bridge);

    // Hair bun
    const bunGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const hairMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000, // Black hair
      shininess: 100
    });
    const bun = new THREE.Mesh(bunGeometry, hairMaterial);
    bun.position.set(0, 1.08, 0);
    figure.add(bun);

    // Hair base
    const hairBaseGeometry = new THREE.CylinderGeometry(0.16, 0.16, 0.08, 32);
    const hairBase = new THREE.Mesh(hairBaseGeometry, hairMaterial);
    hairBase.position.set(0, 1, 0);
    figure.add(hairBase);

    scene.add(figure);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.8);
    frontLight.position.set(2, 2, 2);
    scene.add(frontLight);

    const backLight = new THREE.DirectionalLight(0x4f46e5, 0.5);
    backLight.position.set(-2, 2, -2);
    scene.add(backLight);

    // Camera position
    camera.position.set(0, 0.8, 2);
    camera.lookAt(0, 0.6, 0);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.target = new THREE.Vector3(0, 0.6, 0);

    // Responsive handling
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.01;
      requestAnimationFrame(animate);

      // Gentle floating motion
      figure.position.y = Math.sin(time) * 0.02;
      
      // Subtle rotation
      figure.rotation.y = Math.sin(time * 0.5) * 0.1;

      controls.update();
      renderer.render(scene, camera);
    };

    setIsLoading(false);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      document.getElementById('scene-container')?.removeChild(container);
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
    <div 
      id="scene-container"
      style={{ 
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default ThreeScene; 