module.exports = { publicPath: '/artofwar/' }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/artofwar/'
    : '/'
}