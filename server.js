import express from 'express'
import publicRoutes from './routes/public.js'

const app = express()
app.use(express.json())

app.use('/', publicRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})
