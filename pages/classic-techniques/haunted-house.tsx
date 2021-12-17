import Head from "next/head"
import { HauntedHouseExample } from "../../examples/classic-techniques/HauntedHouse/HauntedHouse"

const hauntedHousePage = () => {
    return (
        <>
            <Head>
                <title>Classic Techniques - Haunted House</title>
            </Head>
            <HauntedHouseExample/>
        </>
    )
}

export default hauntedHousePage