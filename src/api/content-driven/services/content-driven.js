'use strict';

/**
 * content-driven service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::content-driven.content-driven');
