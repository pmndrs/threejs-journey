import Head from "next/head"
import { RagingSeaExample } from "../../examples/shaders/RagingSea/RagingSea"

const RagingSeaPage = () => {
    return (
        <>
            <Head>
                <title>Shaders - Raging Sea</title>
            </Head>
            <RagingSeaExample />
        </>
    )
}

export default RagingSeaPage