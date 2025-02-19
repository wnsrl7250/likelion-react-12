import { use } from 'react';
import { fetchPokemon } from '../api/pokemon';
import PokemonLayout from './pokemon-layout';

interface PokemonProps {
  id: number;
}

function Pokemon({ id }: PokemonProps) {
  const pokemon = use(fetchPokemon(id));

  return (
    <PokemonLayout>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        title={pokemon.name}
        className="size-28"
      />
    </PokemonLayout>
  );
}

export default Pokemon;
