import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Shaders - Patterns'

export default function ShaderPatternsPage() {
  return (
    <>
      <SEO
        title={title}
        description="Shader patterns example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/shaders/shader-patterns.png"
      />
      <SandboxPreview title={title} exampleDir="shaders/ShaderPatterns" />
    </>
  )
}
