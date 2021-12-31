import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Classic Techniques - Galaxy Generator'

export default function GalaxyGeneratorPage() {
  return (
    <>
      <SEO
        title={title}
        description="Galaxy generator example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/classic-techniques/galaxy-generator.png"
      />
      <SandboxPreview title={title} exampleDir="classic-techniques/GalaxyGenerator" />
    </>
  )
}
