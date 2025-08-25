import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function SpinningMesh(props) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.3;
    ref.current.rotation.y += delta * 0.5;
  });
  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      {/* TorusKnot shows depth nicely; swap for box/sphere if you like */}
      <torusKnotGeometry args={[1, 0.3, 256, 32]} />
      <meshStandardMaterial color="#ff6000" metalness={0.4} roughness={0.2} />
    </mesh>
  );
}

export default function Experience() {
  return (
    <>
      {/* Camera controls */}
      <OrbitControls enableDamping />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* A soft environment reflection */}
      <Environment preset="city" />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#0f1625" />
      </mesh>

      {/* Hero object */}
      <SpinningMesh position={[0, 0, 0]} />
    </>
  );
}
