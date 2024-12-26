'use client'
import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

const Earth = () => {
  // Add error handling for model loading
  const [error, setError] = useState(null);
  
  // Load the Earth model with error handling
  const earth = useGLTF("./planet/scene.gltf", undefined, (error) => {
    console.error("Error loading Earth model:", error);
    setError(error);
  });

  // Clean up the model when component unmounts
  useEffect(() => {
    return () => {
      earth.scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          object.material.dispose();
        }
      });
    };
  }, [earth]);

  if (error) {
    return null; // Or a fallback 3D object
  }

  return (
    <primitive 
      object={earth.scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0}
      // Add better performance optimization
      castShadow
      receiveShadow 
    />
  );
};

const EarthCanvas = () => {
  // Add error boundary
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div>Something went wrong with the 3D rendering.</div>;
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true, // Add antialiasing for smoother rendering
          alpha: true // Allow transparency
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Add basic lighting for better visibility */}
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow
          />
          
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5} // Add controlled rotation speed
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableDamping // Add smooth damping
            dampingFactor={0.05}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;