import Recipe from '../models/recipe.js'

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = Recipe.find()
        return res.status(200).json(recipes)
    } catch (error) {
        return res.status(400).json({message : `Internal server error`})
    }
}