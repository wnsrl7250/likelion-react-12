import { tm } from '@/utils/tw-merge';
import Loading from '@/pages/memo-list/components/loading';
import type { Pokemon } from '../types';
import useQuery from '@/hooks/use-query';

function PokemonWithUseQuery() {
  // 포켓몬 개별 정보 가져오기
  // 'https://pokeapi.co/api/v2/pokemon/1'

  const {
    isLoading: loading,
    error,
    data,
  } = useQuery<Pokemon>({
    queryKey: '@pokemon/pikachu',
    queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon/25'),
  });

  console.log(data);

  return (
    <figure
      className={tm(
        'flex gap-5 justify-center items-center',
        'border-4 border-black/10',
        'rounded-full h-42',
        'transition-colors duration-250 ease-in-out',
        'hover:border-black'
      )}
    >
      {/* <Loading size={24} label="데이터 로딩 중..." className="text-black/50" /> */}
      {loading && <Loading size={48} label="포켓몬 데이터 로딩 중..." />}
      {error && <div role="alert">{error.message}</div>}
      {!loading && data && (
        <img
          src={data.sprites.front_default}
          alt={data.name}
          title={data.name}
          className="size-40"
        />
      )}
    </figure>
  );
}

export default PokemonWithUseQuery;
