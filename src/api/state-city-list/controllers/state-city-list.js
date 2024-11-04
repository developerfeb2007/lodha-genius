const axios = require('axios');

module.exports = {
  async getStateCityList(ctx) {
        const states = await strapi.db.query('api::state-city.state-city').findOne({
            select: ['id'],
            populate: {
            Attachment: {
                select: ['url'],
            },
            },
        });
      
        if (states && states.Attachment && states.Attachment.url) {
            const fileUrl = states.Attachment.url;
            try {
                const response = await axios.get(fileUrl);
                const rawData = response.data;
                let parsedData;
                try {
                    parsedData = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
                    const sortedKeys = Object.keys(parsedData).sort();
                    const sortedData = {};
                    sortedKeys.forEach(key => {
                        sortedData[key] = parsedData[key].sort();
                    });
                    ctx.send({ data: sortedData });
                } catch (error) {
                    return ctx.badRequest('Invalid JSON format');
                }
            } catch (error) {
                ctx.badRequest('Failed to fetch the file');
            }
        } else {
            ctx.badRequest('No file found');
        }
  },
};
