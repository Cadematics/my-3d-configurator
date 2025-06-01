// src/App.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelViewerWithSuspense from './components/ModelViewer';
import ModelSelector from './components/ModelSelector';

function App() {
  return (
    <>
      <div className="ui-overlay">
        <ModelSelector />
      </div>
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ModelViewerWithSuspense />
        <OrbitControls />
      </Canvas>
    </>
  );
}


export default App;



