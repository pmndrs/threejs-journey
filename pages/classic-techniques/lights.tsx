import Head from "next/head"
import { LightsExample } from "../../examples/classic-techniques/Lights/Lights"

const LightsPage = () => {
    return (
        <>
            <Head>
                <title>Classic Techniques - Lights</title>
            </Head>
            <LightsExample/>
        </>
    )
}

export default LightsPage