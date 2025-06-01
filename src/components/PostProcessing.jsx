
// src/components/PostProcessing.jsx
import { EffectComposer, Bloom, SSAO, Vignette, BrightnessContrast, HueSaturation, GammaCorrection } from '@react-three/postprocessing';
import { BlendFunction, KernelSize } from 'postprocessing';

function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom blendFunction={BlendFunction.SCREEN} kernelSize={KernelSize.MEDIUM} luminanceThreshold={0.3} luminanceSmoothing={0.83} intensity={0.5} />
      <SSAO radius={0.1} intensity={1.33} luminanceInfluence={0.7} />
      <Vignette eskil={false} offset={0.1} darkness={0.5} />
      <BrightnessContrast brightness={0.0} contrast={0.05} />
      <GammaCorrection gamma={1.6} />
      <HueSaturation saturation={0.191} />
    </EffectComposer>
  );
}

export default PostProcessing;
