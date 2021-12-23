import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Basics - Text3D'

const Text3DPage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="basics/Text3D" />
        </>
    )
}

export default Text3DPage