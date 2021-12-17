import Head from "next/head"
import { RayCasterExample } from "../../examples/classic-techniques/RayCaster/RayCaster"

const RayCasterPage = () => {
    return (
        <>
            <Head>
                <title>Classic Techniques - Raycaster</title>
            </Head>
            <RayCasterExample/>
        </>
    )
}

export default RayCasterPage