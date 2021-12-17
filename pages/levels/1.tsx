import Head from "next/head"
import { Level1Example } from "../../examples/levels/Level1/Level1"

const Level1Page = () => {
    return (
        <>
            <Head>
                <title>Levels - Level 1</title>
            </Head>
            <Level1Example />
        </>
    )
}

export default Level1Page