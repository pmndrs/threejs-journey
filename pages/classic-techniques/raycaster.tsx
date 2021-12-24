import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"
import { SEO } from "../../components/SEO/SEO"

const title = 'Classic Techniques - RayCaster'

const RayCasterPage = () => {
    return (
        <>
            <SEO title={title} description="Raycaster example from Three.js Journey course implemented with react-three-fiber" image="/thumbnails/classic-techniques/raycaster.png" />
            <SandboxPreview title={title} exampleDir="classic-techniques/RayCaster" />
        </>
    )
}

export default RayCasterPage