import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByID, updateUser } from "../controllers/usersController.js";
import { VerifyUsersFields } from "../middlewares/verifyUserFields.js";

const userRouter = Router()


userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id',getUserByID)

userRouter.post('/users', VerifyUsersFields,createUser)

userRouter.put('/users/:id',updateUser)

userRouter.delete('/users/:id',deleteUser)

export default userRouter