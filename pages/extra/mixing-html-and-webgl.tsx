import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Extra - Mixing HTML and WebGL'

export default function MixingHTMLAndWebGLPage() {
  return (
    <>
      <SEO
        title={title}
        description="Mixing HTML and WebGL example from Three.js Journey course implemented and react-three-fiber"
        image="/thumbnails/extra/mixing-html-and-webgl.png"
      />
      <SandboxPreview title={title} exampleDir="extra/MixingHTMLAndWebGL" />
    </>
  )
}
