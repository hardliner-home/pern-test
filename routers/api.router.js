import Router from 'express'

// routers
import AuthRouter from '../routers/auth.router.js'
// import AuthRouter from '../routers/auth.router.js'
// import AuthRouter from '../routers/auth.router.js'

const apiRouter = Router()

apiRouter.use('/auth', AuthRouter)
// apiRouter.routes('/auth', AuthRouter)
// apiRouter.routes('/auth', AuthRouter)

export default apiRouter
