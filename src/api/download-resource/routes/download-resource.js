'use strict';

/**
 * download-resource router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::download-resource.download-resource');
