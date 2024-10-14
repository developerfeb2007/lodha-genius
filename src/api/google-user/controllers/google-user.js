'use strict';

const utils = require('@strapi/utils');
const { sanitize } = utils;

module.exports = {
  async registerUser(ctx) {
    const { firstName, lastName, username, email, password, countryCode, mobile } = ctx.request.body;

    
    if (!email || !password || !username || !mobile || !firstName || !lastName) {
      return ctx.badRequest('All fields are mandatory');
    }

    try {
      const existingUser = await strapi.query('plugin::users-permissions.user').findOne({
        where: {
          $or: [
            { email: email.toLowerCase() },
            { username: username.toLowerCase() },
            { mobile: mobile },
          ],
        },
      });

      if (existingUser) {
        return ctx.badRequest('This email or username or mobile is already registered.');
      }

      const user = await strapi.plugins['users-permissions'].services.user.add({
        firstName,
        lastName,
        email: email.toLowerCase(),
        password,
        username,
        countryCode,
        mobile,
        provider: "local",
        confirmed: true,
        blocked: false,
        role: 1
      });

      if(user){
        // const sanitizedUser = await sanitize.contentAPI.output(user, strapi.getModel('plugin::users-permissions.user'));
        // Registration number starts
        const staticPart = '90';

        // Get the current year
        const year = new Date().getFullYear();

         // Fetch the last created entry
        const lastEntry = await strapi.db.query("plugin::users-permissions.user").findOne({
            where: {confirmed:1},
            orderBy: { registrationNumber: 'desc' },
        });
    
        let incrementingPart = '000001';
    
        if (lastEntry && lastEntry.registrationNumber) {
            const lastRegNumber = lastEntry.registrationNumber.split('/')[2];
            const nextIncrement = parseInt(lastRegNumber, 10) + 1;
            incrementingPart = String(nextIncrement).padStart(6, '0');
        }

        const registrationNumber = `${staticPart}/${year}/${incrementingPart}`;

        const token = strapi.plugins["users-permissions"].services.jwt.issue({
            id: user.id
        });
        await strapi.entityService.update(
            "plugin::users-permissions.user",
            user.id,
            {
                data: {
                    registrationNumber: registrationNumber
                }
            }
        );
        return ctx.send({
            jwt: token,
            user: {
                id:user.id, 
                username: user.username,
                email:user.email, 
                firstName: user.firstName,
                lastName:user.lastName, 
                countryCode: user.countryCode,
                mobile: user.mobile,
                registrationNumber: registrationNumber,
                ApplicationStep: user.ApplicationStep,
                ApplicationStatus: user.ApplicationStatus,
                TestingStatus: user.TestingStatus,
                InterviewStatus: user.InterviewStatus,
                PostApplicationStatus: user.PostApplicationStatus
            }
        });
      }
    } catch (error) {
      return ctx.internalServerError('An error occurred during registration.');
    }
  },
  async loginUser(ctx) {
    const { email } = ctx.request.body;

    if (!email) {
      return ctx.badRequest('Email is mandatory');
    }

    try {
      const existingUser = await strapi.query('plugin::users-permissions.user').findOne({
        where: { email: email.toLowerCase() },
      });

      if (existingUser) {
        const sanitizedUser = await sanitize.contentAPI.output(existingUser, strapi.getModel('plugin::users-permissions.user'));
        const jwt = strapi.plugins["users-permissions"].services.jwt.issue({
            id: existingUser.id
        });
        
        return ctx.send({
            jwt,
            user: sanitizedUser
        });
      }
    } catch (error) {
      return ctx.internalServerError('An error occurred during login.');
    }
  },
};
