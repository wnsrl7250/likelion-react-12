// POST 'https://dummyjson.com/recipes/add'

import { useEffect, useState } from 'react';
import type { Recipe, Recipes } from '../types';
import { getRecipes } from '../lib/recipes';
import { PlusSolid, Spinner } from '@mynaui/icons-react';

function RecipeCreate() {
  const [data, setData] = useState<null | Recipes>(null);

  useEffect(() => {
    let ignore = false;

    getRecipes({ startIndex: 1, limit: 3 }).then((data) => {
      if (!ignore) {
        setData(data);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  // 레시피 추가 요청
  const handleAdd = async (formData: FormData) => {
    try {
      const response = await fetch('https://dummyjson.com/recipes/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('recipe'),
        }),
      });

      if (!response.ok) {
        throw new Error('레시피 추가에 실패했습니다. 😭');
      }

      const addedRecipe = await response.json();

      if (data) {
        const nextData: Recipes = {
          ...data,
          recipes: [addedRecipe, ...data.recipes],
        };

        setData(nextData);
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return (
    <article>
      <h4 className="text-lg font-medium">레시피 아이템 추가</h4>
      <form action={handleAdd} className="flex items-center">
        <input
          type="text"
          name="recipe"
          className="bg-white py-1 px-2 placeholder:text-sm"
          aria-label="레시피"
          placeholder="레시피 이름 입력"
        />
        <button
          type="submit"
          className="p-1 bg-react text-white my-1 cursor-pointer"
          aria-label="추가"
        >
          <PlusSolid size={24} />
        </button>
      </form>

      {!data && (
        <div role="alert" aria-label="로딩 중...">
          <Spinner size={24} className="animate-spin opacity-50" />
        </div>
      )}

      <ul className="flex flex-col gap-2 my-2">
        {data?.recipes?.map((item: Recipe) => (
          <li
            key={item.id}
            className="p-2 border-1 border-slate-400 rounded hover:bg-zinc-200/50"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default RecipeCreate;
