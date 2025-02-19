import useQuery from '@/hooks/use-query';
import useDocumentTitle from '@/hooks/use-document-title';
import Loading from '../memo-list/components/loading';
import type { Pokemon } from '@/types/pokemon';

const fetchPokemon = (type: string) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${type}`);

const pikachuOptions = {
  queryKey: '@pokemon/pikachu',
  queryFn: () => fetchPokemon('pikachu'),
};

const dittoOptions = {
  queryKey: '@pokemon/ditto',
  queryFn: () => fetchPokemon('ditto'),
};

function CustomHookPage() {
  useDocumentTitle('커스텀 훅');

  const pikachu = useQuery<Pokemon>(pikachuOptions);
  const ditto = useQuery<Pokemon>(dittoOptions);

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-medium text-2xl">사용자 정의 훅 함수(Custom Hook)</h2>

      <div className="my-10 flex flex-col gap-5">
        {pikachu.isLoading ? (
          <Loading size={48} />
        ) : (
          <figure className="flex gap-5 justify-center border-4 border-yellow-500/90 rounded-full">
            <img
              src={pikachu.data?.sprites.front_default}
              alt={pikachu.data?.name + ' 전면'}
            />
            <img
              src={pikachu.data?.sprites.back_default}
              alt={pikachu.data?.name + ' 후면'}
            />
          </figure>
        )}

        {ditto.isLoading ? (
          <Loading size={48} />
        ) : (
          <figure className="flex gap-5 justify-center border-4 border-violet-700 rounded-full">
            <img
              src={ditto.data?.sprites.front_default}
              alt={ditto.data?.name + ' 전면'}
            />
            <img
              src={ditto.data?.sprites.back_default}
              alt={ditto.data?.name + ' 후면'}
            />
          </figure>
        )}
      </div>
    </section>
  );
}

export default CustomHookPage;
