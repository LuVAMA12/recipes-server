import bcrypt from 'bcryptjs'
import { Router } from 'express'
import User from '../models/users.js'

const authRouter = Router()

authRouter.post('/register', async (req, res) => {
    const { first_name, last_name, email, password} = req.body
    try {
        const verifyEmail = await User.findOne({email})
        if(verifyEmail) {
            return res.status(400).json({message: 'This email is already used'})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password, salt)
        const newUser = await User.create({
            first_name,
            last_name,
            email,
            password: hashedPassword
        })

        return res.status(200).json(newUser)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:  'Internal server error'})
    }
})

export default authRouter