import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Shaders - Raging Sea'

const RagingSeaPage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="shaders/RagingSea" />
        </>
    )
}

export default RagingSeaPage