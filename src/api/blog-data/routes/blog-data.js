'use strict';

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/blog-detail/:slug',
        handler: 'blog-data.findBySlug',
      }
    ],
  };