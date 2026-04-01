// src/App.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ModelViewerWithSuspense from './components/ModelViewer';
import ModelSelector from './components/ModelSelector';
import ModelUploader from './components/ModelUploader';

function App() {
  return (
    <>
      <div className="ui-overlay" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ModelSelector />
        <ModelUploader />
      </div>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }} shadows>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Model */}
        <ModelViewerWithSuspense />

        {/* Controls */}
        <OrbitControls enableDamping dampingFactor={0.1} />

        {/* Environment */}
        <Environment
          files="/envmaps/room1.hdr"
          background={false}
        />
      </Canvas>
    </>
  );
}

export default App;
