const host = {
  development: 'http://localhost:3000',
  production: 'https://chuckchuck-server.herokuapp.com',
}

const config = {
  backend: {
    host:
      process.env.NODE_ENV === 'development'
        ? host.development
        : host.production,
    port: null,
    apiFolder: '/api',
    servicesFolder: '/services',
  },
}

export default config
