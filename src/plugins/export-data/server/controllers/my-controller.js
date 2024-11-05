'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('export-data')
      .service('myService')
      .getWelcomeMessage();
  },
});
