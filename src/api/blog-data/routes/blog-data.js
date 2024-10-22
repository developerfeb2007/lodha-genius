'use strict';

module.exports = {
    routes: [
      {
        method: "GET",
        path: "/blog-data",
        handler: "blog-data.combinedData",
      },
      {
        method: 'GET',
        path: '/blog-detail/:slug',
        handler: 'blog-data.findBySlug',
      }
    ],
  };