'use strict';

module.exports = {
  async combinedData(ctx) {
    try {
      
        const genders = await strapi.db.query('api::gender.gender').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const classes = await strapi.db.query('api::class.class').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const mother_tongues = await strapi.db.query('api::gender.gender').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const proficiencies = await strapi.db.query('api::class.class').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const school_boards = await strapi.db.query('api::gender.gender').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const completion_years = await strapi.db.query('api::class.class').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const profesions = await strapi.db.query('api::gender.gender').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const relations = await strapi.db.query('api::class.class').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const annual_incomes = await strapi.db.query('api::gender.gender').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const sources = await strapi.db.query('api::class.class').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });

        const combinedData = {
            data: {
                genders,
                classes,
                mother_tongues,
                proficiencies,
                school_boards,
                completion_years,
                profesions,
                relations,
                annual_incomes,
                sources
            }
            
        };

        return ctx.send(combinedData);
    } catch (err) {
    ctx.throw(500, err);
    }
  }
};
