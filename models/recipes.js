import mongoose, { Schema } from 'mongoose'

const recipeSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    author : {
        type:String,
        required: true,
    },
    ingredients: {
        type: Array, 
        required: true 
    },
    content: {
        type: String,
        required: true
    }
})

export default mongoose.model('Recipe', recipeSchema)