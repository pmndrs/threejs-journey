import Head from "next/head"
import { MaterialsExample } from "../../examples/basics/Materials/Materials"

const MaterialsPage = () => {
    return (
        <>
            <Head>
                <title>Basics - Materials</title>
            </Head>
            <MaterialsExample/>
        </>
    )
}

export default MaterialsPage