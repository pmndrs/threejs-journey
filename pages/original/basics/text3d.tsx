import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Basics - Text3D (original)'

export default function Text3DPage() {
  return (
    <>
      <SEO
        title={title}
        description="3D text example from Three.js Journey course"
        image="/thumbnails/basics/text3d.png"
      />
      <SandboxPreview title={title} exampleDir="original/basics/Text3D" />
    </>
  )
}
