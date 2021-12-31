import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Classic Techniques - Particles Animated'

export default function ParticlesAnimatedPage() {
  return (
    <>
      <SEO
        title={title}
        description="Particles-animated example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/classic-techniques/particles-animated.png"
      />
      <SandboxPreview title={title} exampleDir="classic-techniques/ParticlesAnimated" />
    </>
  )
}
