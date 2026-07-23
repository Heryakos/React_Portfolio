import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Fallback for mobile devices — avoids blank/white 3D crash
const MobileFallback = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
    }}
  >
    <div
      style={{
        background: "linear-gradient(135deg, #1d1d2e 0%, #0d0d1a 100%)",
        border: "1px solid rgba(145,94,255,0.3)",
        borderRadius: "20px",
        padding: "30px 24px",
        width: "100%",
        maxWidth: "340px",
        boxShadow: "0 0 40px rgba(145,94,255,0.15)",
        fontFamily: "'Courier New', monospace",
        fontSize: "13px",
        lineHeight: "1.8",
        color: "#a9b1d6",
        animation: "fadeInUp 0.8s ease-out",
      }}
    >
      <div style={{ color: "#9d7cd8", marginBottom: "8px" }}>
        <span style={{ color: "#7aa2f7" }}>const</span>{" "}
        <span style={{ color: "#73daca" }}>developer</span>{" "}
        <span style={{ color: "#89ddff" }}>=</span>{" "}
        <span style={{ color: "#7aa2f7" }}>{`{`}</span>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <div>
          <span style={{ color: "#9d7cd8" }}>name</span>
          <span style={{ color: "#89ddff" }}>:</span>{" "}
          <span style={{ color: "#9ece6a" }}>"Hiryakos Meles"</span>,
        </div>
        <div>
          <span style={{ color: "#9d7cd8" }}>role</span>
          <span style={{ color: "#89ddff" }}>:</span>{" "}
          <span style={{ color: "#9ece6a" }}>"Software Developer"</span>,
        </div>
        <div>
          <span style={{ color: "#9d7cd8" }}>stack</span>
          <span style={{ color: "#89ddff" }}>:</span>{" "}
          <span style={{ color: "#7aa2f7" }}>[</span>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <span style={{ color: "#9ece6a" }}>"Angular"</span>,{" "}
          <span style={{ color: "#9ece6a" }}>"React"</span>,
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <span style={{ color: "#9ece6a" }}>"Python"</span>,{" "}
          <span style={{ color: "#9ece6a" }}>".NET"</span>,
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <span style={{ color: "#9ece6a" }}>"ERPNext"</span>
        </div>
        <div>
          <span style={{ color: "#7aa2f7" }}>]</span>,
        </div>
        <div>
          <span style={{ color: "#9d7cd8" }}>passion</span>
          <span style={{ color: "#89ddff" }}>:</span>{" "}
          <span style={{ color: "#9ece6a" }}>"Enterprise Solutions"</span>
        </div>
      </div>
      <div style={{ color: "#7aa2f7" }}>{`}`}</div>
      <div style={{ marginTop: "16px", color: "#565f89", fontSize: "11px" }}>
        <span style={{ color: "#73daca" }}>// </span>
        Building scalable systems since 2023
      </div>
    </div>
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {["Angular", ".NET", "Python", "ERPNext", "React"].map((tech, i) => (
        <span
          key={tech}
          style={{
            background: "rgba(145,94,255,0.12)",
            border: "1px solid rgba(145,94,255,0.35)",
            color: "#915eff",
            borderRadius: "20px",
            padding: "4px 14px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            animation: `fadeIn ${0.4 + i * 0.1}s ease-out`,
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Detect small mobile screens (phones) — hide 3D canvas entirely to prevent blank
    const smallScreenQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(smallScreenQuery.matches);

    const mobileQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mobileQuery.matches);

    const handleSmall = (e) => setIsSmallScreen(e.matches);
    const handleMobile = (e) => setIsMobile(e.matches);

    smallScreenQuery.addEventListener("change", handleSmall);
    mobileQuery.addEventListener("change", handleMobile);

    return () => {
      smallScreenQuery.removeEventListener("change", handleSmall);
      mobileQuery.removeEventListener("change", handleMobile);
    };
  }, []);

  // On phones/small tablets, render a stylish code card instead of the 3D model
  if (isSmallScreen) {
    return <MobileFallback />;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
