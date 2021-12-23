import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Classic Techniques - RayCaster'

const RayCasterPage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="classic-techniques/RayCaster" />
        </>
    )
}

export default RayCasterPage