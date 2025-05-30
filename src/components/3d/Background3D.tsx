
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, OrbitControls, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <Sphere ref={meshRef} position={position} args={[scale, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
};

const CrystalGeometry = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.ConeGeometry(0.5, 2, 8);
    return geo;
  }, []);

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshPhysicalMaterial
          color="#60a5fa"
          transparent
          opacity={0.7}
          roughness={0}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.9}
          thickness={0.5}
        />
      </mesh>
    </Float>
  );
};

const FloatingRings = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(3)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.5} rotationIntensity={1} floatIntensity={0.5}>
          <mesh position={[0, 0, i * 2 - 2]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2 + i * 0.5, 0.1, 16, 100]} />
            <meshPhysicalMaterial
              color={i === 0 ? "#60a5fa" : i === 1 ? "#a855f7" : "#06b6d4"}
              transparent
              opacity={0.6 - i * 0.1}
              roughness={0.1}
              metalness={0.9}
              emissive={i === 0 ? "#1e40af" : i === 1 ? "#7c3aed" : "#0891b2"}
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const ParticleCloud = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i]) * 0.001;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.015} 
        color="#60a5fa" 
        transparent 
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <Environment preset="night" />
        
        <ambientLight intensity={0.3} color="#4338ca" />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.8} 
          color="#60a5fa" 
          castShadow
        />
        <spotLight 
          position={[-10, -10, -5]} 
          intensity={0.5} 
          color="#a855f7"
          angle={0.3}
          penumbra={1}
        />
        
        <Stars 
          radius={300} 
          depth={60} 
          count={2000} 
          factor={10} 
          saturation={0.8} 
          fade
          speed={0.5}
        />
        
        <ParticleCloud />
        <FloatingRings />
        
        <AnimatedSphere position={[-6, 3, -4]} color="#60a5fa" scale={1.2} />
        <AnimatedSphere position={[6, -2, -6]} color="#a855f7" scale={0.8} />
        <AnimatedSphere position={[0, 5, -8]} color="#06b6d4" scale={1.5} />
        <AnimatedSphere position={[-4, -4, -3]} color="#8b5cf6" scale={0.9} />
        <AnimatedSphere position={[8, 2, -5]} color="#ec4899" scale={1.1} />
        
        <CrystalGeometry position={[-3, 1, -2]} />
        <CrystalGeometry position={[4, -3, -4]} />
        <CrystalGeometry position={[1, 4, -6]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;
