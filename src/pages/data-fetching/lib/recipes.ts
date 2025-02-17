import type { Recipes, Recipe } from '../types';

const ENDPOINT = 'https://dummyjson.com/recipes';
// GET https://dummyjson.com/recipes/search?q=Margherita
// GET https://dummyjson.com/recipes?limit=5&skip=8&select=name,image,rating
// GET https://dummyjson.com/recipes?sortBy=name&order=asc

interface Options {
  q?: string;
  limit?: number;
  startIndex?: number;
  fields?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

export const getRecipes = async ({
  q = '',
  limit = 10,
  startIndex = 0,
  fields = '',
  sortBy = 'id',
  order = 'asc',
}: Options = {}) => {
  let requestQuery = `${ENDPOINT}/`;

  if (q.trim().length > 0) {
    requestQuery += `search/?q=${q}`;
  }

  if (limit) {
    requestQuery += requestQuery.includes('?')
      ? `&limit=${limit}`
      : `?limit=${limit}`;
  }

  if (startIndex) {
    requestQuery += `&skip=${startIndex - 1}`;
  }

  if (fields.trim().length > 0) {
    requestQuery += `&select=${fields}`;
  }

  if (sortBy) {
    requestQuery += `&sortBy=${sortBy}`;
  }

  if (order) {
    requestQuery += `&order=${order}`;
  }

  return (await fetch(requestQuery).then((response) =>
    response.json()
  )) as Recipes;
};

export const getRecipeById = async (id: string | number) => {
  return (await fetch(`${ENDPOINT}/${id}`).then((response) =>
    response.json()
  )) as Recipe;
};
