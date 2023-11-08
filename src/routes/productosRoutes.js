import express from 'express'

const router = express.Router()

router.get('/', (req, res) =>
    res.send('Visitado desde productos'))

router.post('/', (req, res) => {
    const { nombre } = req.body
    console.log(nombre)
    res.send('Visitado desde productos')
})

router.put('/', (req, res) => {
    console.log(req.body)
    res.send('PRODUCTOS PUT!!!!!!')
})

export default router;