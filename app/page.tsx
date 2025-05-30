import { PokemonGrid } from "../components/pokemon-grid";
import { getPokemonList } from '@/lib/pokemonAPI'
import Image from 'next/image'


export default async function Home() {

  const pokemonList = await getPokemonList();

    // Text input : filter the pokemon cards under it:
    // 

  return (
    <PokemonGrid pokemonList={pokemonList}/>
  );
}
