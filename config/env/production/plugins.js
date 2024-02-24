// ./config/env/production/plugins.js

module.exports = {
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 20,
      amountLimit: 200,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
};
