module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/user',
    handler: 'userController.exportUserData',
    config: {
      policies: [],
      auth: false
    },
  },
];
