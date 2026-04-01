import { create } from 'zustand';

const useModelStore = create((set) => ({
  selectedModel: '0000/model_0.glb', // default model path
  uploadedModelUrl: null,
  setSelectedModel: (modelPath) => set({ selectedModel: modelPath, uploadedModelUrl: null }),
  setUploadedModelUrl: (url) => set({ uploadedModelUrl: url }),
}));

export default useModelStore;