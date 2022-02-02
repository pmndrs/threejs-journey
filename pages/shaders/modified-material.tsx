import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Shaders - Modified Material'

export default function ModifiedMaterialPage() {
  return (
    <>
      <SEO
        title={title}
        description="Modified Material example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/shaders/modified-material.png"
      />
      <SandboxPreview title={title} exampleDir="shaders/ModifiedMaterial" />
    </>
  )
}
