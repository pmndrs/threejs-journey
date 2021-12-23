import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Classic Techniques - Galaxy Generator'

const GalaxyGeneratorPage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="classic-techniques/GalaxyGenerator" />
        </>
    )
}

export default GalaxyGeneratorPage