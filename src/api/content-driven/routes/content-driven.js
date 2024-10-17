'use strict';

/**
 * content-driven router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::content-driven.content-driven');
