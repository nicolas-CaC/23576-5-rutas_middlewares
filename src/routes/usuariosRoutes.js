import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query)
    res.send('Visitado desde usuarios')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST!! USUARIOS')
})

router.put('/', (req, res) => {
    console.log('PUT!', req.body)
    res.send('SALUDOS DESDE EL PUT!!!!!')
})

export default router;