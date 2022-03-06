import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Classic Techniques - Galaxy Generator (original)'

export default function GalaxyGeneratorPage() {
  return (
    <>
      <SEO
        title={title}
        description="Galaxy generator example from Three.js Journey course"
        image="/thumbnails/classic-techniques/galaxy-generator.png"
      />
      <SandboxPreview title={title} exampleDir="original/classic-techniques/GalaxyGenerator" />
    </>
  )
}
