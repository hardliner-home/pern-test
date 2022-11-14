import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'

// routers
import apiRouter from './routers/api.router.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
