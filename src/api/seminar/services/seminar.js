'use strict';

/**
 * seminar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seminar.seminar');
