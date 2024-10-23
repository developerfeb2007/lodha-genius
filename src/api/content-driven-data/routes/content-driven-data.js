'use strict';

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/content-driven-page/:slug',
        handler: 'content-driven-data.findBySlug',
      }
    ],
  };