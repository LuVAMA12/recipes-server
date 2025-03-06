import Recipe from '../models/recipes.js'

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        if(recipes.length < 1){
            return res.status(400).json({message : `No recipes`})
        }
            return res.status(200).json(recipes)
    } catch (error) {
        return res.status(400).json({message : `Internal server error`})
    }
}