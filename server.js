import express from 'express'
import methodOverride from 'method-override'
import middlewareMethod from './src/middlewares/middlewarePostPut.js'
import { middlewareError } from './src/middlewares/middlewareError.js'
import middlewareSubdomain from './src/middlewares/middlewareSubdomain.js'
import adminRoutes from './src/routes/adminRoutes.js'
import usuariosRoutes from './src/routes/usuariosRoutes.js'
import productosRoutes from './src/routes/productosRoutes.js'

const app = express()
const PORT = 8080

app.use(middlewareSubdomain('admin', adminRoutes))

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(methodOverride('metodo'))

// app.use(middlewareMethod)


app.use('/usuarios', usuariosRoutes)
app.use('/productos', productosRoutes)

app.use(middlewareError)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))


