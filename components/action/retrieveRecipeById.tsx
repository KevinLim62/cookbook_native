import { recommendData } from "../content/data/dataProps";

export async function retrieveRecipeById(recipeId: string | string[] | undefined){
    return recommendData.find((recipe) => recipe.id === recipeId);
}