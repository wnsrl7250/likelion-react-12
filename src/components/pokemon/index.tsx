import useQuery from '@/hooks/use-query';
import { useParams } from 'react-router';
import Loading from '../loading';
import type { Pokemon as PokemonType } from '@/types/pokemon';

function Pokemon() {
  const { name: pokemonName, weight, lang } = useParams();

  console.log(lang);

  const { isLoading, data: pokemon } = useQuery<PokemonType>({
    queryKey: `@pokemon/${pokemonName}`,
    queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`),
  });

  return (
    <div>
      {isLoading && (
        <Loading label={`포켓몬 ${pokemonName}로딩 중...`} size={86} />
      )}
      {pokemon && (
        <div className="flex flex-col items-center">
          <div className="flex">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt=""
              title=""
              loading="lazy"
              className="size-28"
            />
            {Object.values(pokemon.sprites)
              .filter(Boolean)
              .filter((value) => typeof value === 'string')
              .map((value, index) => {
                return (
                  <img
                    key={index}
                    src={value}
                    alt=""
                    title=""
                    loading="lazy"
                    className="size-28"
                  />
                );
              })}
          </div>
          <figcaption className="text-xl text-stone-700 uppercase -translate-y-1">
            {pokemonName} / {weight}kg
          </figcaption>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
