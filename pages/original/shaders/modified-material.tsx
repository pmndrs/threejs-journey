import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Shaders - Modified Material (original)'

export default function ModifiedMaterialPage() {
  return (
    <>
      <SEO
        title={title}
        description="Modified Material example from Three.js Journey course"
        image="/thumbnails/shaders/modified-material.png"
      />
      <SandboxPreview title={title} exampleDir="original/shaders/ModifiedMaterial" />
    </>
  )
}
