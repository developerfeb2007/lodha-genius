'use strict';

/**
 * school-board service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::school-board.school-board');
