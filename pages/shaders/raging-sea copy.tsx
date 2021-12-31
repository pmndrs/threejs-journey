import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Shaders - Animated Galaxy'

export default function AnimatedGalaxyPage() {
  return (
    <>
      <SEO
        title={title}
        description="Animated Galaxy example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/shaders/animated-galaxy.png"
      />
      <SandboxPreview title={title} exampleDir="shaders/AnimatedGalaxy" />
    </>
  )
}
