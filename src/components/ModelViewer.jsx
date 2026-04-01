// src/components/ModelViewer.jsx
import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import useModelStore from '../store/useModelStore';

function ModelViewer() {
  const { selectedModel, uploadedModelUrl } = useModelStore();
  const modelPath = uploadedModelUrl ? uploadedModelUrl : `/products/${selectedModel}`;
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} />;
}

export default function ModelViewerWithSuspense() {
  return (
    <Suspense fallback={null}>
      <ModelViewer />
    </Suspense>
  );
}
