// src/components/ModelViewer.jsx
import React, { Suspense, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import useModelStore from '../store/useModelStore';

function ModelViewer() {
  const { selectedModel, uploadedModelUrl, setAvailableMaterials, materialOverrides } = useModelStore();
  const modelPath = uploadedModelUrl ? uploadedModelUrl : `/products/${selectedModel}`;
  const { scene, materials } = useGLTF(modelPath);

  // Extract materials on load
  useEffect(() => {
    if (materials) {
      const matList = Object.keys(materials).map((key) => {
        const mat = materials[key];
        return {
          name: key,
          color: mat.color ? '#' + mat.color.getHexString() : '#ffffff',
          roughness: mat.roughness !== undefined ? mat.roughness : 0.5,
          metalness: mat.metalness !== undefined ? mat.metalness : 0.5,
        };
      });
      setAvailableMaterials(matList);
    }
  }, [materials, setAvailableMaterials, modelPath]);

  // Apply material overrides
  useEffect(() => {
    if (!materials) return;
    Object.entries(materialOverrides).forEach(([name, override]) => {
      const mat = materials[name];
      // ensure we are dealing with standard materials
      if (mat) {
        if (override.color && mat.color) mat.color.set(override.color);
        if (override.roughness !== undefined) mat.roughness = override.roughness;
        if (override.metalness !== undefined) mat.metalness = override.metalness;
        mat.needsUpdate = true;
      }
    });
  }, [materialOverrides, materials]);

  return <primitive object={scene} />;
}

export default function ModelViewerWithSuspense() {
  return (
    <Suspense fallback={null}>
      <ModelViewer />
    </Suspense>
  );
}
