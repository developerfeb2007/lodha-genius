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
  },

  async findBySlug(ctx) {
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
                select: ['Title', 'Description', 'OGTitle', 'OGDescription'],
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

    return {data: blog};
  },

};
