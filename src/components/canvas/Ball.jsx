import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} 
    rotationIntensity={1}
    floatIntensity={2}>
      <ambientLight intensity={0.50}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1,1]}/>
      <meshStandardMaterial  
      color='#fff8eb'
      poLygonOffset
      poLygonOffsetFactor={-5}
      flatShading
      />
      <Decal
      position={[0,0,1]}
      rotation={[2 * Math.PI,0, 6.25]}
      flatShading
       map={decal}/>
      </mesh>
      </Float>
  )
}

// Flat icon card for mobile — avoids WebGL context limit crash
const FlatBallIcon = ({ icon }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(145deg, #1d1d2e, #0d0d1a)",
      borderRadius: "50%",
      border: "1.5px solid rgba(145,94,255,0.3)",
      boxShadow: "0 0 12px rgba(145,94,255,0.15)",
      padding: "16px",
    }}
  >
    <img
      src={icon}
      alt="tech icon"
      style={{
        width: "60%",
        height: "60%",
        objectFit: "contain",
        filter: "drop-shadow(0 0 4px rgba(145,94,255,0.4))",
      }}
    />
  </div>
);

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // On mobile, show flat icon — WebGL context limit (16 per page) causes crashes
  if (isMobile) {
    return <FlatBallIcon icon={icon} />;
  }

  return (
    <Canvas 
    frameloop="demand"
    dpr={[1, 1.5]}
    gl={{ preserveDrawingBuffer: true, antialias: false }}>
      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls enableZoom={false}/>
      <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas> 
  )
}

export default BallCanvas