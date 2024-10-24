'use strict';

module.exports = {
  async combinedData(ctx) {
    try {
      
        const header = await strapi.db.query('api::header.header').findOne({
            where: { 
                publishedAt: { $notNull: true } 
            },
            select: ['icon_url', 'button_text', 'button_link'],
            populate: {
                Menu: {
                    select: ['name', 'link', 'class'],
                    populate: {
                        Submenu: {
                            select: ['name', 'link']
                        }
                    }
                }
            },
            orderBy: { createdAt: 'ASC' },
        });
        const footer = await strapi.db.query('api::footer.footer').findOne({
            where: { 
                publishedAt: { $notNull: true } 
            },
            select: ['id', 'copyright_text', 'button_link', 'button_text'],
            populate: {
                DetailSection: {
                    select: ['content', 'email', 'address'],
                    populate: {
                        ContactNumber: {
                            select: ['mobile']
                        },
                        SocialMedia: {
                            select: ['url'],
                            populate: {
                                Logo: {
                                    select: ['url']
                                }
                            }
                        }
                    }
                },
                CurriculumSection: {
                    select: ['heading'],
                    populate: {
                        Items: {
                            select: ['title', 'link']
                        }
                    }
                },
                QuestionSection: {
                    select: ['heading'],
                    populate: {
                        Items: {
                            select: ['question', 'link', 'class']
                        }
                    }
                },
                PagesSection: {
                    select: ['name', 'link']
                }
            },
            orderBy: { createdAt: 'ASC' },
        });
        
        const combinedData = {
            data: {
                header,
                footer
            }
            
        };

        return ctx.send(combinedData);
    } catch (err) {
    ctx.throw(500, err);
    }
  }
};
