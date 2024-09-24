'use strict';

/**
 * state-city service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::state-city.state-city');
