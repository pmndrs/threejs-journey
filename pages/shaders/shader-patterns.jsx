import Head from "next/head"
import { ShaderPatternsExample } from "../../examples/shaders/ShaderPatterns/ShaderPatterns"

const ShaderPatternsPage = () => {
    return (
        <>
            <Head>
                <title>Shaders - Shader Patterns</title>
            </Head>
            <ShaderPatternsExample />
        </>
    )
}

export default ShaderPatternsPage