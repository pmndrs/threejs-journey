import Head from "next/head"
import { SandboxPreview } from "../../components/SandboxPreview/SandboxPreview"

const title = 'Classic Techniques - ScrollBasedAnimation'

const ScrollBasedAnimationPage = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <SandboxPreview title={title} exampleDir="classic-techniques/ScrollBasedAnimation" />
        </>
    )
}

export default ScrollBasedAnimationPage