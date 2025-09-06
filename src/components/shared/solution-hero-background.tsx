"use client"

import LightRays from "../light-rays"

export function BackgroundEffects() {
  return (
    <>
      {/* The new WebGL light rays effect, with props tweaked for a soft, ambient spotlight look. */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#FFFFFF"
        lightSpread={0.35} // Slightly soften the spotlight edges
        rayLength={2.5} // Maximum length
        fadeDistance={1.2} // Keep visibility
        pulsating // Keep subtle movement
        raysSpeed={0.1} // Keep slow speed
        mouseInfluence={0} // No mouse interaction
        distortion={0.02} // Keep organic feel
        noiseAmount={0} // No noise
        saturation={1.2} // Max saturation
        className="absolute inset-0"
      />

      {/* Gradient overlay to fade out the bottom of the light rays */}

      {/* Grid background with radial fade */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          mask: "radial-gradient(circle at center, black 0%, black 40%, transparent 80%)",
          WebkitMask: "radial-gradient(circle at center, black 0%, black 40%, transparent 80%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 40%, transparent 80%), linear-gradient(to top, transparent 0%, black 20%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 40%, transparent 80%), linear-gradient(to top, transparent 0%, black 20%)",
        }}
      />
    </>
  )
}
