'use strict';

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
                html: `
                  <h2>Thank You</h2>
                  <p>For submitting the form.</p>
                  <p><strong>Your Application Number is: ${data.registrationNumber}</strong></p>
                  <p>Please save this for future reference.</p>
                  <p>We will share details about the test with you soon over your registered email ID.</p>
                `,
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
