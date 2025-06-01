// src/components/ModelSelector.jsx
import React from 'react';
import useModelStore from '../store/useModelStore';

const models = [
  { label: 'Model 0', path: '0000/model_0.glb' },
  { label: 'Model 1', path: '0001/model_1.glb' },
  { label: 'Model 2', path: '0002/model_2.glb' },
  // Add more models as needed
];

function ModelSelector() {
  const { setSelectedModel } = useModelStore();

  return (
    <div style={{ position: 'absolute', top: 20, left: 20 }}>
      {models.map((model) => (
        <button key={model.path} onClick={() => setSelectedModel(model.path)}>
          {model.label}
        </button>
      ))}
    </div>
  );
}

export default ModelSelector;
