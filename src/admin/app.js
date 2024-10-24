const config = {
    locales: [
      // 'ar','fr','cs','de','dk','es','he','id','it','ja','ko','ms','nl','no','pl','pt-BR','pt','ru','sk','sv','th','tr','uk','vi','zh-Hans','zh',
    ],
    translations: {
      en:{
        "Auth.form.welcome.title": "Welcome to Lodha Admin",
        "Auth.form.welcome.subtitle": "Please login to continue"
      }
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  };
  
  const bootstrap = (app) => {
    console.log(app);
  };
  
  export default {
    config,
    bootstrap,
  };
  