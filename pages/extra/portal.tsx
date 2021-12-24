import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"
import { SEO } from "../../components/SEO/SEO"

const title = 'Extra - Portal'

const PortalPage = () => {
    return (
        <>
            <SEO title={title} description="Portal example from Three.js Journey course implemented with react-three-fiber" image="/thumbnails/extra/portal.png" />
            <SandboxPreview title={title} exampleDir="extra/Portal" />
        </>
    )
}

export default PortalPage