import { SandboxPreview } from '../../../components/SandboxPreview/SandboxPreview'
import { SEO } from '../../../components/SEO/SEO'

const title = 'Classic Techniques - ScrollBasedAnimation (original)'

export default function ScrollBasedAnimationPage() {
  return (
    <>
      <SEO
        title={title}
        description="Scroll based animation example from Three.js Journey course"
        image="/thumbnails/classic-techniques/scroll-based-animation.png"
      />
      <SandboxPreview title={title} exampleDir="original/classic-techniques/ScrollBasedAnimation" />
    </>
  )
}
