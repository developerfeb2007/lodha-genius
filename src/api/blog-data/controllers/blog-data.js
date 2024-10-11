'use strict';

module.exports = {
  async combinedData(ctx) {
    try {
      
        const blogs = await strapi.db.query('api::blog.blog').findMany({
            // select: ['id', 'Title', 'Slug', 'PublishedDate', 'Content'],
            orderBy: { createdAt: 'ASC' },
            populate: {
                MobileBanner: {
                    select: ['url']
                },
                DesktopBanner: {
                    select: ['url']
                }
            }
        });
        const metaDetails = await strapi.db.query('api::blog-page.blog-page').findMany({
            // select: ['id', 'Title'],
            orderBy: { createdAt: 'ASC' },
            populate: {
                MetaDetails: {
                    populate: {
                        OGImage: {
                            select: ['url']
                        }
                    }
                }
            }
        });

        const combinedData = {
            data: {
                blogs,
                metaDetails
            }
            
        };

        return ctx.send(combinedData);
    } catch (err) {
    ctx.throw(500, err);
    }
  }
};
