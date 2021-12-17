import Head from "next/head"
import { ParticlesExample } from "../../examples/classic-techniques/Particles/Particles"

const ParticlesPage = () => {
    return (
        <>
            <Head>
                <title>Classic Techniques - Particles</title>
            </Head>
            <ParticlesExample/>
        </>
    )
}

export default ParticlesPage