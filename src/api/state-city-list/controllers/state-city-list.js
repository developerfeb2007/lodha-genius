const fs = require('fs');

module.exports = {
  async getStateCityList(ctx) {
        const states = await strapi.db.query('api::state-city.state-city').findOne({
            select: ['id'],
            populate: {
            Attachment: {
                select: ['url'], // Get the file URL
            },
            },
        });
      
        if (states && states.Attachment && states.Attachment.url) {
            const fileUrl = states.Attachment.url;
            const filePath = `./public${fileUrl}`;
      
      
            // Read and parse the JSON file
            const rawData = fs.readFileSync(filePath, 'utf8');
            let parsedData;
            try {
                parsedData = JSON.parse(rawData);
            } catch (error) {
                return ctx.badRequest('Invalid JSON format');
            }
      
            // Send the parsed data
            ctx.send({data: parsedData});
        } else {
            ctx.badRequest('No file found');
        }
  },
};
