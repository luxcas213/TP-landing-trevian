"use client";

import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { STLLoader } from 'three-stdlib';

// Componente del modelo STL con Suspense
function STLModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  // Cargar el modelo STL
  const geometry = useLoader(STLLoader, '/models/plantilla.stl');
  
  // Normalizar el modelo (centrarlo y escalarlo)
  if (geometry) {
    geometry.center();
    geometry.computeBoundingBox();
    const bbox = geometry.boundingBox;
    if (bbox) {
      const size = bbox.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 6 / maxDim; 
      geometry.scale(scale, scale, scale);
    }
  }
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.z += delta * 0.1;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Modelo STL principal */}
      <mesh ref={meshRef} geometry={geometry} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#6DFFD5" 
          emissive="#6DFFD5"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// Componente de fallback mientras carga
function LoadingFallback() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[2, 0.7, 16, 32]} />
      <meshStandardMaterial 
        color="#6DFFD5" 
        emissive="#6DFFD5"
        emissiveIntensity={0.3}
        metalness={0.7}
        roughness={0.3}
      />
    </mesh>
  );
}

// Componente principal de la escena 3D
export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Luces */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#6DFFD5" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#D2FFF2" />
        <spotLight 
          position={[8, 8, 8]} 
          angle={0.4} 
          penumbra={1} 
          intensity={1.5}
          color="#6DFFD5"
        />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#D2FFF2"
        />
        
        {/* Modelo STL con Suspense para manejo de carga */}
        <Suspense fallback={<LoadingFallback />}>
          <STLModel />
        </Suspense>
        
        {/* Controles opcionales */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}
