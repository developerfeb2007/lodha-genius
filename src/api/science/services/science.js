'use strict';

/**
 * science service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::science.science');
