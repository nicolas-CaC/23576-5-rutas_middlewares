const middleware = (subdomain, fn) =>

    (req, res, next) => {

        const host = req.hostname.split('.')

        if (host[0] === subdomain)
            return fn(req, res, next)

        next()
    }

export default middleware
