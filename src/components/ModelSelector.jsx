import React from 'react';
import useModelStore from '../store/useModelStore';

const models = [
  { label: 'Model 0', path: '0000/model_0.glb' },
  { label: 'Model 1', path: '0001/model_1.glb' },
  { label: 'Model 2', path: '0002/model_2.glb' },
  { label: 'Model 3', path: '0003/model_3.glb' },
  { label: 'Model 4', path: '0004/model_4.glb' },
  { label: 'Model 5', path: '0005/model_5.glb' },
  { label: 'Hoodie', path: 'hoodie/hoodie.glb' },
  { label: 'Sample', path: 'sample/sample.glb' },
];

function ModelSelector() {
  const { selectedModel, setSelectedModel } = useModelStore();

  return (
    <select
      value={selectedModel}
      onChange={(e) => setSelectedModel(e.target.value)}
      style={{
        padding: '0.6em 1.2em',
        fontSize: '1em',
        fontWeight: 'bold',
        backgroundColor: '#1a1a1a',
        color: 'white',
        border: '2px solid #646cff',
        borderRadius: '8px',
        cursor: 'pointer',
        outline: 'none',
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {models.map((model) => (
        <option key={model.path} value={model.path}>
          {model.label}
        </option>
      ))}
    </select>
  );
}

export default ModelSelector;
