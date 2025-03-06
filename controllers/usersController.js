import User from '../models/users.js'

export const getAllUsers = async (req, res) => {

        try{
            const users = await User.find()
            if(!users) {
                return res.status(400).json({message:  'User not found'})
            }
            return res.status(200).json(users)
        } catch(err) {
            return res.status(400).json({message:  'Internal server error'})
        }
}

export const getUserByID =  async (req, res) => {
    const {id} = req.params
    try{
        const userByID = await User.findById(id)
        return res.status(200).json(userByID)
    } catch(err) {
        return res.status(400).json({message:  'Internal server error'})
    }
}

export const createUser = async (req, res) => {
    const {first_name, last_name, email, password}= req.body
    try {
        const newUser = await User.create(req.body)
        return res.status(201).json({message: 'New User created'})
    } catch(err) {
        console.log(err)
        return res.status(400).json({message:  'Internal server error'})
    }
}

export const updateUser = async (req, res) => {
    const {id}= req.params
    const {first_name, last_name, email, password}= req.body
    try {
        const userByID = await User.findByIdAndUpdate(id, req.body, {new: true})
        return res.status(200).json(userByID)
    } catch(err) {
        console.log(err)
        return res.status(400).json({message:  'Internal server error'})
    }
}

export const deleteUser = async (req, res) => {
    const {id}= req.params
    console.log(id)
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        if (deleteUser) {
            return res.status(204).json({message:  'User has been deleted'})
        }
    } catch(err) {
        console.log(err)
        return res.status(400).json({message:  'Internal server error'})
    }
}