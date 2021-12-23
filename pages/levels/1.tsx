import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Levels - Level 1'

const Level1Page = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="levels/Level1" />
        </>
    )
}

export default Level1Page