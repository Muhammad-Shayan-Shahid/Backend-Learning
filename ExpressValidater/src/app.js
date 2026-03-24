import express from 'express'
import authRouter from './routes/auth.routes.js'
import handleError from './middlewares/error.middlewares.js'
const app = express()
app.use("/api/auth" , authRouter)

app.use(handleError)

export default app