import { use } from 'react';
import { fetchPokemon } from '../api/pokemon';
import PokemonLayout from './pokemon-layout';
import { Link } from 'react-router';

interface PokemonProps {
  id: number;
}

function Pokemon({ id }: PokemonProps) {
  const pokemon = use(fetchPokemon(id));

  return (
    <Link to={`/pokemons/name/${pokemon.name}/weight/${pokemon.weight}`}>
      <PokemonLayout>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt=""
          title=""
          loading="lazy"
          className="size-28"
        />
        <figcaption className="text-sm text-stone-700 uppercase -translate-y-1">
          {pokemon.name}
        </figcaption>
      </PokemonLayout>
    </Link>
  );
}

export default Pokemon;
