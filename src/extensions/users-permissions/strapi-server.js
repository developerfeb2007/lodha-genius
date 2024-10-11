

module.exports = (plugin) => {

    plugin.controllers.auth.otpVerification = async (ctx) => {
        try{
            const { otp, email } = ctx.request.body;
            if(!otp || !email){
                return ctx.badRequest("Email and OTP are required!");
            }
            const user = await strapi.db.query("plugin::users-permissions.user").findOne({
                where: {otp, email}
            });
            if(!user){
                return ctx.badRequest("Invalid OTP");
            }

            // Registration number starts
            const staticPart = '90';

            // Get the current year
            const year = new Date().getFullYear();

             // Fetch the last created entry
            const lastEntry = await strapi.db.query("plugin::users-permissions.user").findOne({
                where: {confirmed:1},
                orderBy: { registrationNumber: 'desc' },
            });
        
            let incrementingPart = '000001'; // Default if no previous entry exists
        
            if (lastEntry && lastEntry.registrationNumber) {
                // Extract the incrementing part from the last registration number
                const lastRegNumber = lastEntry.registrationNumber.split('/')[2];
        
                // Convert it to a number and increment it
                const nextIncrement = parseInt(lastRegNumber, 10) + 1;
        
                // Pad the incremented number with leading zeros
                incrementingPart = String(nextIncrement).padStart(6, '0');
            }

            // Generate the registration number
            const registrationNumber = `${staticPart}/${year}/${incrementingPart}`;

            const token = strapi.plugins["users-permissions"].services.jwt.issue({
                id: user.id
            });
            await strapi.entityService.update(
                "plugin::users-permissions.user",
                user.id,
                {
                    data: {
                        otp: null,
                        confirmed: 1,
                        registrationNumber: registrationNumber
                    }
                }
            );
            ctx.send({
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
                    applicationStep: user.ApplicationStep,
                    applicationStatus: user.ApplicationStatus,
                    testingStatus: user.TestingStatus,
                    interviewStatus: user.InterviewStatus,
                    postApplicationStep: user.PostApplicationStatus
                }
            });
        }catch(error){
            return ctx.badRequest(error);
        }
    };

    plugin.routes['content-api'].routes.push({
      method: 'POST',
      path: '/auth/otp-verify',
      handler: 'auth.otpVerification',
      config:{
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: "",
        auth: false,
      }
    });

    const originalAuthRegister = plugin.controllers.auth.register;

    plugin.controllers.auth.register = async (ctx) => {
        try{
            await originalAuthRegister(ctx);
            const otp = Math.floor(1000 + Math.random() * 9000);
            await strapi.entityService.update(
                "plugin::users-permissions.user",
                ctx.response.body.user.id,
                {
                    data: {
                        otp,
                        confirmed: 0,
                    }
                }
            );
            
            await strapi.plugins['email'].services.email.send({
                to: ctx.response.body.user.email,
                subject: 'OTP Verification',
                html: `<p>Welcome to Lodha family</p>
                        <p>Here is the otp to verify your account - </p>
                        <h4>`+ otp +`</h2>`,
            })
            
            ctx.send({
                message: 'An OTP has been sent to your email.'
            });

        }catch(error){
            return ctx.badRequest(error);
        }
    }
  
    return plugin;
  };