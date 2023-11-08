import express from 'express'

const router = express.Router()

router.get('/', (req, res) =>
    res.send('menu del ADMIN'))


export default router;