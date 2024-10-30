// module.exports = () => ({});
module.exports = ({ env }) => ({
    // other plugin configurations
    // upload: {
    //   config: {
    //     providerOptions: {
    //       // Other provider options if needed
    //     },
    //     breakpoints: {}, // This disables the creation of additional image formats
    //   },
    // },
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET_KEY'),
            region: env('AWS_REGION'),
            params: {
              ACL: 'private',
              Bucket: env('AWS_BUCKET_NAME'),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
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
          "content-driven": {
            field: 'Slug',
            references: 'Title',
          }
        },
      },
    },
    "media-prefix": {
      enabled: true,
    },
  });
  