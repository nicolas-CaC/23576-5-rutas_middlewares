export const middlewareError = (req, res, next) => {
    res.status(404).send('Recurso no encontrado')
}
