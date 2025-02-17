// POST 'https://dummyjson.com/recipes/add'

import { useEffect, useState } from 'react';
import type { Recipe, Recipes } from '../types';
import { getRecipes } from '../lib/recipes';
import { Spinner } from '@mynaui/icons-react';

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

  const handleAdd = async (formData: FormData) => {
    // 레시피 추가 요청
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
  };

  return (
    <article>
      <h4>레시피 리스트</h4>
      <form action={handleAdd}>
        <input
          type="text"
          name="recipe"
          aria-label="레시피"
          className="bg-white p-1"
        />
        <button
          type="submit"
          className="px-4 py-1 bg-react text-white my-1 cursor-pointer"
        >
          추가
        </button>
      </form>
      {!data && (
        <div role="alert" aria-label="로딩 중...">
          <Spinner size={24} className="animate-spin opacity-50" />
        </div>
      )}
      <ul>
        {data?.recipes?.map((item: Recipe) => (
          <li key={item.id} className="p-1 border rounded">
            {item.name}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default RecipeCreate;
