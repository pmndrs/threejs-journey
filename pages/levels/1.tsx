import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"
import { SEO } from "../../components/SEO/SEO"

const title = 'Levels - Level 1'

const Level1Page = () => {
    return (
        <>
            <SEO title={title} description="Level 1 model from Three.js Journey course implemented with react-three-fiber" image="/thumbnails/levels/level1.png" />
            <SandboxPreview title={title} exampleDir="levels/Level1" />
        </>
    )
}

export default Level1Page