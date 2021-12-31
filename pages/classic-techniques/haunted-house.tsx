import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Classic Techniques - Haunted House'

const HauntedHousePage = () => {
  return (
    <>
      <SEO
        title={title}
        description="Haunted house example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/classic-techniques/haunted-house.png"
      />
      <SandboxPreview title={title} exampleDir="classic-techniques/HauntedHouse" />
    </>
  )
}

export default HauntedHousePage
