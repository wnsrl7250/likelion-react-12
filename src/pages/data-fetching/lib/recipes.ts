import type { Recipes, Recipe } from '../types';

const ENDPOINT = 'https://dummyjson.com/recipes';

export const getRecipes = async () => {
  return (await fetch(ENDPOINT).then((response) => response.json())) as Recipes;
};

export const getRecipeById = async (id: string | number) => {
  return (await fetch(`${ENDPOINT}/${id}`).then((response) =>
    response.json()
  )) as Recipe;
};
