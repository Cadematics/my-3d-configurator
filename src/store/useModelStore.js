import { create } from 'zustand';

const useModelStore = create((set) => ({
  selectedModel: '0000/model_0.glb', // default model path
  setSelectedModel: (modelPath) => set({ selectedModel: modelPath }),
}));

export default useModelStore;