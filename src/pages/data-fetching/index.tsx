import useDocumentTitle from '@/hooks/use-document-title';
import RecipeCreate from './components/RecipeCreate';
import RecipeDelete from './components/RecipeDelete';
import RecipeEdit from './components/RecipeEdit';
import RecipeList from './components/RecipeList';
import RecipeSingle from './components/RecipeSingle';
import useQuery from '@/hooks/use-query';
import type { Pokemon } from '@/types/pokemon';
import Loading from '../memo-list/components/loading';

function DataFetchingPage() {
  useDocumentTitle('데이터 페칭');

  const { data, isLoading, $$cache } = useQuery<Pokemon>({
    queryKey: '@pokemon/pikachu',
    queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon/pikachu'),
  });

  console.table($$cache);

  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">포켓몬</h2>
      {isLoading ? (
        <Loading size={48} />
      ) : (
        <figure className="flex gap-5">
          <img src={data?.sprites.front_default} alt="" />
          <img src={data?.sprites.back_default} alt="" />
        </figure>
      )}

      <h2 className="text-2xl font-medium">데이터 변형(Data Mutations)</h2>

      <RecipeDelete />
      <RecipeEdit />
      <RecipeCreate />

      <hr />

      <h2 className="text-2xl font-medium">데이터 쿼리(Data Query)</h2>

      <h3 className="text-xl font-medium">레시피 리스트</h3>
      <RecipeList />

      <hr />

      <h3 className="text-xl font-medium">레시피 싱글</h3>
      <RecipeSingle />
    </section>
  );
}

export default DataFetchingPage;
