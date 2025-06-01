// src/components/ModelViewer.jsx
import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import useModelStore from '../store/useModelStore';

function ModelViewer() {
  const { selectedModel } = useModelStore();
  const { scene } = useGLTF(`/products/${selectedModel}`);

  return <primitive object={scene} />;
}

export default function ModelViewerWithSuspense() {
  return (
    <Suspense fallback={null}>
      <ModelViewer />
    </Suspense>
  );
}
