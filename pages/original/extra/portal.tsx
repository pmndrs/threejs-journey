import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Extra - Portal (original)'

export default function PortalPage() {
  return (
    <>
      <SEO
        title={title}
        description="Portal example from Three.js Journey course"
        image="/thumbnails/extra/portal.png"
      />
      <SandboxPreview title={title} exampleDir="original/extra/Portal" />
    </>
  )
}
