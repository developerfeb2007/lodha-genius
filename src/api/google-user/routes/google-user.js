module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/google-registration',
        handler: 'google-user.registerUser',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'POST',
        path: '/google-login',
        handler: 'google-user.loginUser',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  