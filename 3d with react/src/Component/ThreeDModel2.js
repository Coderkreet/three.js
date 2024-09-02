import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';

// This component loads and displays the 3D model
const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/model/skull_downloadable.glb');

  useEffect(() => {
    gsap.to(modelRef.current.rotation, {
      y: 2 * Math.PI, // 360 degrees rotation on the Y-axis
      duration: 20, // duration of the animation in seconds
      repeat: -1, // infinite loop
      ease: 'linear', // linear easing for continuous rotation
    });
  }, []);

  return <primitive ref={modelRef} object={scene} scale={3} />;
};

const ThreeDModel2 = () => {
  return (
    <div className="relative  h-[100vh] bg-black w-full flex flex-col justify-center items-center">
      <h1 className="absolute top-50 text-center text-white text-[3rem] z-20 font-bold mt-4">
        Kreet Is Back to the Zone
      </h1>
      <Canvas className="">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} /> {/* Disable zoom */}
      </Canvas>
    </div>
  );
};

export default ThreeDModel2;
