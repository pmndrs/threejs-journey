import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"
import { SEO } from "../../components/SEO/SEO"

const title = 'Basics - Text3D'

const Text3DPage = () => {
    return (
        <>
            <SEO title={title} description="3D text example from Three.js Journey course implemented with react-three-fiber" image="/thumbnails/basics/text3d.png" />
            <SandboxPreview title={title} exampleDir="basics/Text3D" />
        </>
    )
}

export default Text3DPage