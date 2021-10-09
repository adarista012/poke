import Link from 'next/link'
import { Header, Item , List, Wrapper} from '../styles/styles'


const Pokemon = ({ pokemon }) => {
  //console.log(pokemon.url.split('/').filter(x => x).pop())
  const id = pokemon.url.split('/').filter(x => x).pop()
  return (
    //<link>
      <Item><Link href={`/pokemones/${id}`}>{pokemon.name}</Link></Item>
    //</link>
    
  )
}

export default function Pokemones({ pokemones }) {
  //console.log(pokemones)
  return (
    
    <Wrapper>
      <Header>Mi App de Pokemones</Header>
      <List>
         {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
      </List>
    </Wrapper>
  
    // <section>
    //   <Header>Mi App de Pokemones</Header>
    //   <p>Mi App de Pokemones</p>
    //   <ul>
    //     {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
    //   </ul>
    // </section>
    
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return {
    props: { pokemones: data.results }
  }
}