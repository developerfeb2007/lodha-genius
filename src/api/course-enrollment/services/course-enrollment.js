'use strict';

/**
 * course-enrollment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-enrollment.course-enrollment');
