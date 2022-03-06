import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Shaders - Raging Sea (original)'

export default function RagingSeaPage() {
  return (
    <>
      <SEO
        title={title}
        description="Raging Sea example from Three.js Journey course"
        image="/thumbnails/shaders/raging-sea.png"
      />
      <SandboxPreview title={title} exampleDir="original/shaders/RagingSea" />
    </>
  )
}
