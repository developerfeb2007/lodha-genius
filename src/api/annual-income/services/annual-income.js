'use strict';

/**
 * annual-income service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::annual-income.annual-income');
