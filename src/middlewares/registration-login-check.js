const { errors } = require('@strapi/utils');
const { ApplicationError, ValidationError } = errors;
const bcrypt = require('bcryptjs');

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    
    // Registration check: Ensure unique registration number
    if (ctx.request.method === 'POST' && ctx.request.url === '/api/auth/local/register') {
      const { mobile } = ctx.request.body;

      if (mobile) {
        const existingUser = await strapi.entityService.findMany(
          'plugin::users-permissions.user',
          { filters: { mobile } }
        );

        if (existingUser.length > 0) {
          throw new ApplicationError('Mobile number already exists');
        }
      }
    }

    // Login check: Verify credentials
    if (ctx.request.method === 'POST' && ctx.request.url === '/api/auth/local') {
      const { identifier, password } = ctx.request.body;

      // Validate that both identifier and password are provided
      if (!identifier || !password) {
        throw new ValidationError('Email and password are required');
      }

      // Find the user by their email or username (identifier)
      const [user] = await strapi.entityService.findMany('plugin::users-permissions.user', {
        filters: { email: identifier },
      });

      // If user does not exist or password is incorrect, throw an error
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new ValidationError('Invalid credentials');
      }
    }

    // Continue to next middleware or controller if no errors
    await next();
  };
};
