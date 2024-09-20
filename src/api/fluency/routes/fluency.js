'use strict';

/**
 * fluency router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fluency.fluency');
