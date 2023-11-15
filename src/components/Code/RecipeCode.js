import React from 'react';
import CodeBlock from './CodeEditorJSX'; // Adjust the import path as necessary

const MyComponent = () => {
  const codeString = `/**
  * This module provides an API endpoint for searching recipes using the Spoonacular API.
  * It handles the requests to search for recipes based on various parameters like query,
  * page, limit, diet, and type. The response from Spoonacular is then processed to
  * check if these recipes already exist in the local database. If not, they are saved.
  * It returns a list of recipes to the client.
  */
 
import axios from 'axios';
import Recipe from '../models/recipe_model.mjs';
  
export const searchRecipes = async (req, res) => {
  try {
    const { query, page = 1, limit = 12, diet, type} = req.query;

    const offset = (page - 1) * limit;
    
    const response = await axios.get(
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      {
        headers: {
          'X-RapidAPI-Key': 'private',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        },
        params: {
          query,
          addRecipeInformation: true,
          sort: req.query.sort || 'popularity', // sort by popularity if no sort query param is provided
          number: limit,
          offset: offset,
          diet: diet || '',
          type: type || '',
        },
      }
    );

    const recipes = [];

    for (const recipeData of response.data.results) {
      // Check if the recipe already exists in the database using its ID
      let recipe = await Recipe.findOne({ id: recipeData.id });
  
      if (!recipe) {
          // If the recipe doesn't exist, create a new instance and save it
          recipe = new Recipe(recipeData);
          await recipe.save();
          console.log('data saved');
      }
      // Push the recipe (whether existing or new) to the recipes array
      recipes.push(recipe);
  }
  
    res.json({results: recipes});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
  `;

  return (
    <div>
      <CodeBlock code={codeString} />
    </div>
  );
};

export default MyComponent;
