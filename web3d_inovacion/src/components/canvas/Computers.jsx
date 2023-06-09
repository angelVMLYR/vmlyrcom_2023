import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF('../../../public/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene} 
        scale={ isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -6, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    // Se agrega un listener a los cambios de pantalla
    const mediaQuery  = window.matchMedia('(max-width: 500px)');

    // Establecer el valor inicial de la variable de estado 'ismobile'
    setIsMobile(mediaQuery.matches);
    
    // Se define una funcion callback para mandejar las media querys
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Se defiune una callback como listener  para los cambios de la mediaquery
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  })

  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} 
          maxPOlarAngle={Math.PI / 2}
          minPOlarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}



export default ComputersCanvas;