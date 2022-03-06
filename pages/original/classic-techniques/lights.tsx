import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Classic Techniques - Lights (original)'

export default function LightsPage() {
  return (
    <>
      <SEO
        title={title}
        description="Lights example from Three.js Journey course"
        image="/thumbnails/classic-techniques/lights.png"
      />
      <SandboxPreview title={title} exampleDir="original/classic-techniques/Lights" />
    </>
  )
}
