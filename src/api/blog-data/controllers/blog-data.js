'use strict';

module.exports = {
  async findBySlug(ctx) {
    try {
      
        const { slug } = ctx.params;
        const blog = await strapi.db.query('api::blog.blog').findOne({
            where: { 
                slug,
                publishedAt: { $notNull: true } 
            },
            select: ['id', 'Title', 'Slug', 'PublishedDate', 'Content', 'ShortDescription'],
            populate: {
                DesktopBanner: {
                    select: ['url']
                },
                MobileBanner: {
                    select: ['url']
                },
                MetaDetails: {
                    select: ['id', 'Title', 'Description', 'OGTitle', 'OGDescription'],
                    populate: {
                        OGImage: {
                            select: ['url']
                        }
                    }
                }
            }
        });

        if (!blog) {
        return ctx.notFound('Blog not found');
        }

        return ctx.send({data: blog});

    } catch (err) {
        ctx.throw(500, err);
    }
  },

};
