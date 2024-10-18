'use strict';

/**
 * learning-module service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learning-module.learning-module');
