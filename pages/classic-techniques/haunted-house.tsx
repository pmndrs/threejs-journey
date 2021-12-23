import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Classic Techniques - HauntedHouse'

const HauntedHousePage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="classic-techniques/HauntedHouse" />
        </>
    )
}

export default HauntedHousePage