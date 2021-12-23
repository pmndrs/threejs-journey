import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Classic Techniques - Particles'

const ParticlesPage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="classic-techniques/Particles" />
        </>
    )
}

export default ParticlesPage