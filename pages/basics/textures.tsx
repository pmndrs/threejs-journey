import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Basics - Textures'

export default function TexturesPage() {
  return (
    <>
      <SEO
        title={title}
        description="Textures example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/basics/textures.png"
      />
      <SandboxPreview title={title} exampleDir="basics/Textures" />
    </>
  )
}
