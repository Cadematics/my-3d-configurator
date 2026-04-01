import { create } from 'zustand';

const useModelStore = create((set) => ({
  selectedModel: '0000/model_0.glb', // default model path
  uploadedModelUrl: null,
  availableMaterials: [],
  materialOverrides: {},

  setSelectedModel: (modelPath) => 
    set({ selectedModel: modelPath, uploadedModelUrl: null, availableMaterials: [], materialOverrides: {} }),
  
  setUploadedModelUrl: (url) => 
    set({ uploadedModelUrl: url, availableMaterials: [], materialOverrides: {} }),

  setAvailableMaterials: (materials) => 
    set({ availableMaterials: materials, materialOverrides: {} }),

  updateMaterialOverride: (materialName, property, value) => 
    set((state) => ({
      materialOverrides: {
        ...state.materialOverrides,
        [materialName]: {
          ...state.materialOverrides[materialName],
          [property]: value
        }
      }
    })),
}));

export default useModelStore;