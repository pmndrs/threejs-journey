import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Shaders - Patterns'

const ShaderPatternsPage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="shaders/ShaderPatterns" />
        </>
    )
}

export default ShaderPatternsPage