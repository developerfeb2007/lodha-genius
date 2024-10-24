'use strict';

module.exports = {
  
  async findBySlug(ctx) {
    try{
      const { slug } = ctx.params;
      const page = await strapi.db.query('api::content-driven.content-driven').findOne({
        where: { 
            slug,
            publishedAt: { $notNull: true } 
        },
        select: ['id', 'Title', 'Slug', 'Content'],
        populate: {
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

      if (!page) {
        return ctx.notFound('Page not found');
      }

      return {data: page};

    }catch (err) {
      ctx.throw(500, err);
    }
    
  },

};
