'use strict';

module.exports = {
    routes: [
      {
        method: "GET",
        path: "/blog-data",
        handler: "blog-data.combinedData",
      },
    ],
  };