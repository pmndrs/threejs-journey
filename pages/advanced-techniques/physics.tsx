import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Advanced Techniques - Physics'

export default function PhysicsPage() {
  return (
    <>
      <SEO
        title={title}
        description="Physics example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/advanced-techniques/physics.png"
      />
      <SandboxPreview title={title} exampleDir="advanced-techniques/Physics" />
    </>
  )
}
