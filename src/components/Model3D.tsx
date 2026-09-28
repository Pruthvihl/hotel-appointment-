'use client'
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment, Lightformer, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function GlassShape({ type }: { type: 'sphere' | 'torus' | 'knot' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={type === 'sphere' ? 1.5 : 1}>
        {type === 'sphere' && <sphereGeometry args={[1, 64, 64]} />}
        {type === 'torus' && <torusGeometry args={[1, 0.4, 64, 128]} />}
        {type === 'knot' && <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />}
        <MeshTransmissionMaterial 
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color="#FAFAF9"
          attenuationColor="#A16207"
          attenuationDistance={1}
        />
      </mesh>
    </Float>
  );
}

export default function Model3D({ type = 'sphere' }: { type?: 'sphere' | 'torus' | 'knot' }) {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        
        {/* Offline Environment for Reflections (No external HDR fetch) */}
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
            <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
          </group>
        </Environment>

        <GlassShape type={type} />
      </Canvas>
    </div>
  );
}
