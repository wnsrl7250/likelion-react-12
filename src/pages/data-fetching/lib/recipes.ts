import type { Recipes, Recipe } from '../types';

const ENDPOINT = 'https://dummyjson.com/recipes';
// GET https://dummyjson.com/recipes/search?q=Margherita
// GET https://dummyjson.com/recipes?limit=5&skip=8&select=name,image,rating
// GET https://dummyjson.com/recipes?sortBy=name&order=asc

export const getRecipes = async () => {
  return (await fetch(ENDPOINT).then((response) => response.json())) as Recipes;
};

export const getRecipeById = async (id: string | number) => {
  return (await fetch(`${ENDPOINT}/${id}`).then((response) =>
    response.json()
  )) as Recipe;
};
