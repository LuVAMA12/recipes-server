import mongoose, { Schema } from 'mongoose'

const recipeSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    category:  {type:String,},
    country:{type:String,},
    description : {type:String,},
    ingredients: [{type:String}],
    steps: [{type:String}],
    author : {
        type:mongoose.Schema.Types.ObjectId, ref:'User',
    },
})

export default mongoose.model('Recipe', recipeSchema)