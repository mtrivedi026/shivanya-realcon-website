"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Procedurally generated realistic Tower Crane
function TowerCrane() {
  const craneRef = useRef<THREE.Group>(null);
  const loadRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (craneRef.current) {
      craneRef.current.rotation.y = Math.sin(time * 0.2) * 0.6;
    }
    if (loadRef.current) {
      loadRef.current.rotation.x = Math.sin(time * 1.5) * 0.05;
      loadRef.current.rotation.z = Math.cos(time * 1.2) * 0.05;
    }
  });

  return (
    <group position={[0, -3.5, 0]} scale={[1, 1, 1]}>
      {/* MAST */}
      <mesh position={[0, 3.5, 0]}>
        <boxGeometry args={[0.6, 7, 0.6]} />
        <meshStandardMaterial color="#00E5FF" wireframe />
      </mesh>
      
      {/* UPPER SECTION */}
      <group position={[0, 7, 0]} ref={craneRef}>
        <mesh position={[0.4, -0.2, 0.4]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.2} />
        </mesh>
        <mesh position={[0.4, -0.2, 0.4]}>
          <boxGeometry args={[0.81, 0.81, 0.81]} />
          <meshStandardMaterial color="#00E5FF" wireframe />
        </mesh>
        
        <mesh position={[0, 1.5, 0]}>
          <coneGeometry args={[0.3, 2, 4]} />
          <meshStandardMaterial color="#00E5FF" wireframe />
        </mesh>

        {/* Jib */}
        <mesh position={[0, 0, 3.5]}>
          <boxGeometry args={[0.5, 0.5, 7]} />
          <meshStandardMaterial color="#00E5FF" wireframe />
        </mesh>

        {/* Counter-Jib */}
        <mesh position={[0, 0, -1.5]}>
          <boxGeometry args={[0.5, 0.5, 3]} />
          <meshStandardMaterial color="#00E5FF" wireframe />
        </mesh>

        <mesh position={[0, 0.2, -2.5]}>
          <boxGeometry args={[1, 0.8, 1]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>

        {/* Cables */}
        <mesh position={[0, 0.75, 2]} rotation={[1.2, 0, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 4.5]} />
          <meshBasicMaterial color="#00E5FF" />
        </mesh>
        
        <mesh position={[0, 0.75, -1]} rotation={[-0.9, 0, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 2.5]} />
          <meshBasicMaterial color="#00E5FF" />
        </mesh>

        <mesh position={[0, -2, 5.5]}>
          <cylinderGeometry args={[0.01, 0.01, 4]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.6} />
        </mesh>
        
        <mesh position={[0, -4, 5.5]} ref={loadRef}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#00E5FF" />
        </mesh>
        <mesh position={[0, -4, 5.5]}>
          <boxGeometry args={[0.82, 0.82, 0.82]} />
          <meshStandardMaterial color="#1e293b" wireframe />
        </mesh>
      </group>
    </group>
  );
}

function SmallBuilding() {
  return (
    <group position={[-6, -3.5, 2]} scale={[0.9, 0.9, 0.9]}>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[2.5, 4, 2.5]} />
        <meshStandardMaterial color="#008eb3" transparent opacity={0.3} roughness={0.1} />
      </mesh>
      {Array.from({ length: 7 }).map((_, i) => (
        <mesh key={i} position={[0, 0.2 + i * 0.6, 0]}>
          <boxGeometry args={[2.6, 0.05, 2.6]} />
          <meshStandardMaterial color="#00E5FF" wireframe={i > 4} />
        </mesh>
      ))}
      <mesh position={[-0.5, 4.2, 0.5]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[0.5, 4.15, -0.5]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
    </group>
  );
}

function MovingTruck({ positionZ, positionX = 0, speed, delay, color, rotationY = 0 }: { positionZ: number, positionX?: number, speed: number, delay: number, color: string, rotationY?: number }) {
  const truckRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (truckRef.current) {
      let x = ((state.clock.elapsedTime * speed + delay) % 60) - 30;
      truckRef.current.position.x = x;
    }
  });

  return (
    <group position={[positionX, -3.3, positionZ]} rotation={[0, rotationY, 0]}>
      <group ref={truckRef} scale={[0.4, 0.4, 0.4]}>
        <mesh position={[1.5, 0.8, 0]}>
          <boxGeometry args={[1, 1.2, 1]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={[-0.5, 0.5, 0]}>
          <boxGeometry args={[3, 0.2, 1.2]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        {[-1.5, 0, 1.5].map((x, i) => (
          <group key={i}>
            <mesh position={[x, 0.2, 0.5]} rotation={[Math.PI/2, 0, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.2]} />
              <meshStandardMaterial color="#020617" />
            </mesh>
            <mesh position={[x, 0.2, -0.5]} rotation={[Math.PI/2, 0, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 0.2]} />
              <meshStandardMaterial color="#020617" />
            </mesh>
          </group>
        ))}
        <mesh position={[-0.5, 0.9, 0]}>
          <boxGeometry args={[2.5, 0.6, 0.8]} />
          <meshStandardMaterial color="#00E5FF" wireframe />
        </mesh>
        <mesh position={[-0.5, 0.9, 0]}>
          <boxGeometry args={[2.4, 0.5, 0.7]} />
          <meshStandardMaterial color="#008eb3" transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

export default function Background3D() {
  return (
    <div 
      className="fixed inset-0 z-0 opacity-80 pointer-events-none"
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    >
      <Canvas 
        dpr={1} // Force lowest pixel ratio for performance
        gl={{ powerPreference: "high-performance", antialias: false, alpha: false }} // Disable antialiasing and alpha for massive FPS boost
        camera={{ position: [10, 4, 16], fov: 45 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#020617'); // Native background color instead of transparent CSS
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#00E5FF" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#008eb3" />
        
        <Stars radius={50} depth={50} count={300} factor={4} saturation={1} speed={0.5} />
        
        {/* Construction Scene */}
        <TowerCrane />
        <SmallBuilding />
        
        {/* Moving Trucks (Reduced to 4 for performance) */}
        <MovingTruck positionZ={5} positionX={0} speed={3} delay={0} color="#00E5FF" />
        <MovingTruck positionZ={2} positionX={0} speed={3.5} delay={10} color="#008eb3" rotationY={Math.PI} />
        <MovingTruck positionZ={0} positionX={-4} speed={2} delay={20} color="#00E5FF" rotationY={Math.PI / 2} />
        <MovingTruck positionZ={0} positionX={8} speed={4} delay={2} color="#008eb3" rotationY={-Math.PI / 2} />
      </Canvas>
    </div>
  );
}
