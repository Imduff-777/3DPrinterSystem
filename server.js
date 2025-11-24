import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
})

app.get("/", (req, res) => {
    res.send({message: "hello world"})
})