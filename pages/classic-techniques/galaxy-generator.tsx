import Head from "next/head"
import { GalaxyGeneratorExample } from "../../examples/classic-techniques/GalaxyGenerator/GalaxyGenerator"

const GalaxyGeneratorPage = () => {
    return (
        <>
            <Head>
                <title>Classic Techniques - Galaxy Generator</title>
            </Head>
            <GalaxyGeneratorExample/>
        </>
    )
}

export default GalaxyGeneratorPage