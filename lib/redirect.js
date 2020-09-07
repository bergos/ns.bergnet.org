function factory () {
  return (req, res, next) => {
    // ignore javascript files
    if (req.path.startsWith('/js/')) {
      return next()
    }

    const parts = req.path.split('/').filter(item => item !== '')

    // redirect paths with a depth bigger than 1
    if (parts.length > 1) {
      return res.redirect(`/${parts[0]}/`)
    }

    // and paths without / at the end
    if (!req.path.endsWith('/')) {
      return res.redirect(`/${parts[0]}/`)
    }

    next()
  }
}

module.exports = factory
