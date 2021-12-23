import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Basics - Textures'

const TexturesPage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="basics/Textures" />
        </>
    )
}

export default TexturesPage