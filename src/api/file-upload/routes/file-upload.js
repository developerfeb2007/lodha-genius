// strapi.config.js
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/file-upload',
        handler: 'file-upload.uploadDocuments',
      },
    ],
  };