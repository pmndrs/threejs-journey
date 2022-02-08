import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Extra - Post Processing'

export default function PostProcessingPage() {
  return (
    <>
      <SEO
        title={title}
        description="Post Processing example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/extra/post-processing.png"
      />
      <SandboxPreview title={title} exampleDir="extra/PostProcessing" />
    </>
  )
}
