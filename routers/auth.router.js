import Router from 'express'
import AuthController from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.get('/', AuthController.findSession)
authRouter.post('/', AuthController.createSession)
authRouter.delete('/', AuthController.deleteSession)

export default authRouter
