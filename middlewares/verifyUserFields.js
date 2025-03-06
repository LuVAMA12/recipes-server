export const VerifyUsersFields = (req, res, next) => {
    try {
        const {first_name, last_name, email, password}= req.body
        if(!first_name || !last_name || !email || !password) {
            return res.json('All fields are required')
        }
        next()
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({message:  'Internal server error'})
    }
}