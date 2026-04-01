import React, { useRef } from 'react';
import useModelStore from '../store/useModelStore';

function ModelUploader() {
  const fileInputRef = useRef(null);
  const { setUploadedModelUrl } = useModelStore();

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create an object URL for the uploaded file
      const url = URL.createObjectURL(file);
      setUploadedModelUrl(url);
    }
    // reset input value so the same file could be loaded again if needed
    event.target.value = '';
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".glb,.gltf"
        style={{ display: 'none' }}
      />
      <button
        onClick={handleButtonClick}
        style={{
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontWeight: 'bold',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          outline: 'none',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.2s',
          marginTop: '10px',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#535bf2')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#646cff')}
      >
        Load Model
      </button>
    </div>
  );
}

export default ModelUploader;
