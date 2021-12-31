import { SandboxPreview } from '../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../components/SEO/SEO'

const title = 'Classic Techniques - ScrollBasedAnimation'

export default function ScrollBasedAnimationPage() {
  return (
    <>
      <SEO
        title={title}
        description="Scroll based animation example from Three.js Journey course implemented with react-three-fiber"
        image="/thumbnails/classic-techniques/scroll-based-animation.png"
      />
      <SandboxPreview title={title} exampleDir="classic-techniques/ScrollBasedAnimation" />
    </>
  )
}
