import { Router } from "express";
import { getAllRecipes } from "../controllers/recipesController.js";

const recipeRouter = Router()


recipeRouter.get('/recipes', getAllRecipes)
recipe

export default recipeRouter