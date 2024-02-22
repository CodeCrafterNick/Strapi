'use strict';

/**
 * similar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::similar.similar');
