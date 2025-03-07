import Recipe from '../models/recipes.js'

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('author')
        if(recipes.length < 1){
            return res.status(400).json({message : `No recipes found`})
        }
            return res.status(200).json(recipes)
    } catch (error) {
        return res.status(400).json({message : `Internal server error`})
    }
}

export const getRecipeByID = async (req, res) => {
    const {id} = req.params
    try {
        const recipeByID = await Recipe.findById(id).populate('author')
        if(!recipeByID){
            return res.status(400).json({message: "Recipe not found"}) 
        }
        return res.status(200).json(recipeByID)
    } catch (error) {
        return res.status(400).json({message : `Internal server error`})
    }
}

export const createNewRecipe = async (req, res) => {
    try {
        if(!req.body.title) {
            return res.json('title is required')
        }
       const newRecipe = await Recipe.create(req.body)
               return res.status(201).json({message: 'New Recipe created'})
    } catch (error) {
        return res.status(400).json({message : `Internal server error`})
    }
}

export const updateRecipe = async (req, res) => {
    const {id} = req.params
    try {
        const updateRecipe = await Recipe.findByIdAndUpdate(id, req.body)
        if(!updateRecipe){
            return res.status(400).json({message: "Recipe not found"}) 
        }
        return res.status(202).json(updateRecipe)
    } catch (error) {
        return res.status(400).json({message : `Internal server error`})
    }
} 

export const deleteRecipe = async (req, res) => {
    const {id} = req.params
    try {
        const deleteRecipe = await Recipe.findByIdAndDelete(id, req.body)

        if(deleteRecipe) {
            return res.status(202).json({message: "Recipe has been deleted"})
        } else {
            return res.status(400).json({message: "Recipe not found"}) 
        }
    } catch (error) {
        return res.status(400).json({message : `Internal server error`})
    }
}