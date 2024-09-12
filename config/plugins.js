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
  });
  