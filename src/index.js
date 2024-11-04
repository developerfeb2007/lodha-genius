'use strict';
const emailTemplates = require('./utils/emailTemplates');
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  // bootstrap(/*{ strapi }*/) {},
  async bootstrap({ strapi }) {
    // registering a subscriber
      strapi.db.lifecycles.subscribe({
        models: ['plugin::users-permissions.user'],

        async beforeUpdate(event){
          
          const { data, where } = event.params;
    
          const existingEntry = await strapi.entityService.findOne('plugin::users-permissions.user', where.id);
          
          if (data.ApplicationStatus === 'Submitted' && existingEntry.ApplicationStatus !== 'Submitted') {
            try {
              await strapi.plugins['email'].services.email.send({
                to: data.email,
                subject: 'Application Submitted',
                html: emailTemplates.applicationSubmissionEmail(data.registrationNumber)
              });
              console.log('Email sent successfully');
            } catch (error) {
              console.error('Error sending email:', error);
            }
          }
        }
      });
  }
};
