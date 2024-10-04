'use strict';

/**
 * download-resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-resource.download-resource');
