import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"
import { SEO } from "../../components/SEO/SEO"

const title = 'Classic Techniques - Lights'

const LightsPage = () => {
    return (
        <>
            <SEO title={title} description="Lights example from Three.js Journey course implemented with react-three-fiber" image="/thumbnails/classic-techniques/lights.png" />
            <SandboxPreview title={title} exampleDir="classic-techniques/Lights" />
        </>
    )
}

export default LightsPage