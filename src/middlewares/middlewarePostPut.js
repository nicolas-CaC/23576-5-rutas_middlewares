const middleware = (req, res, next) => {

    if (req.method === 'GET')
        req.method = 'PUT'

    next()
}

export default middleware