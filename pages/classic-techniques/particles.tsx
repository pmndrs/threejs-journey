import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Classic Techniques - Particles'

export default function ParticlesPage() {
  return (
    <>
      <SEO
        title={title}
        description="Particles example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/classic-techniques/particles.png"
      />
      <SandboxPreview title={title} exampleDir="classic-techniques/Particles" />
    </>
  )
}
