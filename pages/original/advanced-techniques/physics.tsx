import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Advanced Techniques - Physics (original)'

export default function PhysicsPage() {
  return (
    <>
      <SEO
        title={title}
        description="Physics example from Three.js Journey course"
        image="/thumbnails/advanced-techniques/physics.png"
      />
      <SandboxPreview title={title} exampleDir="original/advanced-techniques/Physics" />
    </>
  )
}
