import { useTexture } from "@react-three/drei";
import {
  Bloom,
  BrightnessContrast,
  ChromaticAberration,
  DotScreen,
  EffectComposer,
  Glitch,
  Grid,
  HueSaturation,
  Noise,
  Pixelation,
  Scanline,
  Sepia,
  Vignette
} from "@react-three/postprocessing";
import { useControls } from "leva";
import React from "react";
import { Displacement } from "./customEffects/Displacement";
import { TextureOverlay } from "./customEffects/TextureOverlay";
import { Tint } from "./customEffects/Tint";

function Effects() {
  const {
    args,
    dotScreen,
    glitch,
    bloom,
    noise,
    vignette,
    sepia,
    pixelation,
    hueSaturation,
    brightnessContrast,
    scanLine,
    chromaticAberration,
    grid,
    tint,
    displacement,
    futuristicUI
  } = useControls({
    args: [1, 1, 1],
    dotScreen: false,
    glitch: false,
    bloom: false,
    noise: false,
    vignette: false,
    sepia: false,
    pixelation: false,
    hueSaturation: false,
    brightnessContrast: false,
    scanLine: false,
    chromaticAberration: false,
    grid: false,
    tint: false,
    displacement: false,
    futuristicUI: false
  });

  const { futuristicInterface } = useTexture({
    futuristicInterface: "/textures/interfaceNormalMap.png"
  });

  return (
    <EffectComposer>
      {dotScreen && <DotScreen angle={Math.PI * args[0]} scale={args[1]} />}
      {glitch && (
        <Glitch
          delay={[args[0] * 1.5, args[0] * 3.5]}
          duration={[args[1] * 0.6, args[1]]}
          strength={[args[2] * 0.3, args[2]]}
        />
      )}
      {bloom && (
        <Bloom
          intensity={15 * args[0]}
          luminanceSmoothing={0.9 * args[1]}
          luminanceThreshold={0.6 * args[2]}
        />
      )}
      {noise && <Noise />}
      {vignette && <Vignette offset={0.4 * args[0]} darkness={0.7 * args[1]} />}
      {sepia && <Sepia intensity={args[0]} />}
      {pixelation && <Pixelation granularity={5 * args[0]} />}
      {hueSaturation && (
        <HueSaturation
          hue={Math.PI * 0.25 * args[0]}
          saturation={Math.PI * 0.25 * args[1]}
        />
      )}
      {brightnessContrast && (
        <BrightnessContrast
          brightness={0.1 * args[0]}
          contrast={0.5 * args[1]}
        />
      )}
      {scanLine && <Scanline density={args[0]} />}
      {chromaticAberration && (
        <ChromaticAberration offset={[0.02 * args[0], 0.002 * args[1]]} />
      )}
      {grid && <Grid scale={args[0]} lineWidth={args[1]} />}
      {tint && <Tint tint={args} />}
      {displacement && <Displacement args={args} />}
      {futuristicUI && (
        <TextureOverlay normalMap={futuristicInterface} args={args} />
      )}
    </EffectComposer>
  );
}

export { Effects };
