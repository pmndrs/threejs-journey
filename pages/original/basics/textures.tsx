import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Basics - Textures (original)'

export default function TexturesPage() {
  return (
    <>
      <SEO
        title={title}
        description="Textures example from Three.js Journey course"
        image="/thumbnails/basics/textures.png"
      />
      <SandboxPreview title={title} exampleDir="original/basics/Textures" />
    </>
  )
}
