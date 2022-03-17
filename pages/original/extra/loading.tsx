import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Extra - Loading (original)'

export default function LoadingPage() {
  return (
    <>
      <SEO
        title={title}
        description="Loading example from Three.js Journey course"
        image="/thumbnails/extra/loading.png"
      />
      <SandboxPreview title={title} exampleDir="original/extra/Loading" />
    </>
  )
}
