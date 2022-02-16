import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Extra - Loading'

export default function LoadingPage() {
  return (
    <>
      <SEO
        title={title}
        description="Loading example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/extra/loading.png"
      />
      <SandboxPreview title={title} exampleDir="extra/Loading" />
    </>
  )
}
