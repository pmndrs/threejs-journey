import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Classic Techniques - RayCaster (original)'

export default function RayCasterPage() {
  return (
    <>
      <SEO
        title={title}
        description="Raycaster example from Three.js Journey course"
        image="/thumbnails/classic-techniques/raycaster.png"
      />
      <SandboxPreview title={title} exampleDir="original/classic-techniques/RayCaster" />
    </>
  )
}
