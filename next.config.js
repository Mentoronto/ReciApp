module.exports = {
  images:{
    domains:["www.themealdb.com"]
  },
    
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/:path*',

      },
    ]
  },
}
