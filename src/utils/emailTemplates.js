const emailTemplates = {
    // Template for approval status
    applicationSubmissionEmail: (registrationNumber) => `
      <h2>Thank You</h2>
      <p>For submitting the form.</p>
      <p><strong>Your Application Number is: ${registrationNumber}</strong></p>
      <p>Please save this for future reference.</p>
      <p>We will share details about the test with you soon over your registered email ID.</p>
    `,
  
    // Template for rejection status
    // rejectionEmail: (reason) => `
    //   <h2>Application Update</h2>
    //   <p>We regret to inform you that your application was not approved.</p>
    //   <p><strong>Reason: ${reason}</strong></p>
    //   <p>If you have any questions, please contact support.</p>
    // `,
  
    // Template for welcome email
    sendOTPEmail: (otp) => `
        <p>Lodha Genius Programme 2025 Application</p>
        <p>Here is the otp to verify your account - </p>
        <h4>${otp}</h4>
    `,
  };
  
  module.exports = emailTemplates;
  