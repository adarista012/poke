
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { WrapperPoke } from '../../styles/styles'

const Pokemon = ({ data }) => {
    const router = useRouter()
    //console.log(router)
    // if (router.isFallback){
    //     return <p>Cargando...</p>
    // }
    return (
        <WrapperPoke>
            {data.name} número #{data.id}
            <Image src={data.sprites.front_default} width={400} height={400} />
            <Link href='/'>Volver al inicio</Link>
        </WrapperPoke>
    )
}

export default Pokemon

export const getStaticProps = async ({ params }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()

    return { props: { data } }
}

export const getStaticPaths = async () => {
    const paths = [
        { params: { id: '1' } },
        { params: { id: '14' } },
    ]
    return {
        paths,
        //fallback: true,
        fallback: 'blocking',
    }
}
// export const getServerSideProps = async ({ params }) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//     const data = await response.json()

//     return { props: { data } }
// }