'use strict';

/**
 * content-driven controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::content-driven.content-driven');
