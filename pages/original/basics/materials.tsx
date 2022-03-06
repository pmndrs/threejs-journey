import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Basics - Materials (original)'

export default function MaterialsPage() {
  return (
    <>
      <SEO
        title={title}
        description="Materials example from Three.js Journey course"
        image="/thumbnails/basics/material.png"
      />
      <SandboxPreview title={title} exampleDir="original/basics/Materials" />
    </>
  )
}