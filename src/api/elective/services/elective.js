'use strict';

/**
 * elective service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::elective.elective');
