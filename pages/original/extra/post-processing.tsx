import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Extra - Post Processing (original)'

export default function PostProcessingPage() {
  return (
    <>
      <SEO
        title={title}
        description="Post Processing example from Three.js Journey course"
        image="/thumbnails/extra/post-processing.png"
      />
      <SandboxPreview title={title} exampleDir="original/extra/PostProcessing" />
    </>
  )
}
