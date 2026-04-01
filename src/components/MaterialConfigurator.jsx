import React from 'react';
import useModelStore from '../store/useModelStore';

function MaterialConfigurator() {
  const { availableMaterials, materialOverrides, updateMaterialOverride } = useModelStore();

  if (!availableMaterials || availableMaterials.length === 0) {
    return null;
  }

  return (
    <div style={{
      padding: '15px',
      backgroundColor: '#1a1a1a',
      borderRadius: '8px',
      border: '2px solid #646cff',
      color: 'white',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '280px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    }}>
      <h3 style={{ margin: '0 0 15px 0', fontSize: '1.2em' }}>Materials</h3>
      {availableMaterials.map((mat) => {
        const override = materialOverrides[mat.name] || {};
        const color = override.color || mat.color;
        const roughness = override.roughness !== undefined ? override.roughness : mat.roughness;
        const metalness = override.metalness !== undefined ? override.metalness : mat.metalness;

        return (
          <div key={mat.name} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #333' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '1em', wordWrap: 'break-word', color: '#8892b0' }}>
              {mat.name}
            </h4>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ flex: 1, fontSize: '0.9em' }}>Color</label>
              <input 
                type="color" 
                value={color}
                onChange={(e) => updateMaterialOverride(mat.name, 'color', e.target.value)}
                style={{ cursor: 'pointer', border: 'none', background: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.9em', marginBottom: '4px' }}>
                Roughness: {Number(roughness).toFixed(2)}
              </label>
              <input 
                type="range" 
                min="0" max="1" step="0.01"
                value={roughness}
                onChange={(e) => updateMaterialOverride(mat.name, 'roughness', parseFloat(e.target.value))}
                style={{ cursor: 'pointer' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ fontSize: '0.9em', marginBottom: '4px' }}>
                Metalness: {Number(metalness).toFixed(2)}
              </label>
              <input 
                type="range" 
                min="0" max="1" step="0.01"
                value={metalness}
                onChange={(e) => updateMaterialOverride(mat.name, 'metalness', parseFloat(e.target.value))}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MaterialConfigurator;
