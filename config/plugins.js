// module.exports = () => ({});
module.exports = ({ env }) => ({
    // other plugin configurations
    upload: {
      config: {
        providerOptions: {
          // Other provider options if needed
        },
        breakpoints: {}, // This disables the creation of additional image formats
      },
    },
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.gmail.com'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USER'),
            pass: env('SMTP_PASS'),
          },
        },
        settings: {
          defaultFrom: env('SMTP_USER'),
        },
      },
    },
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          blog: {
            field: 'Slug',
            references: 'Title',
          },
        },
      },
    },
    "media-prefix": {
      enabled: true,
    },
  });
  