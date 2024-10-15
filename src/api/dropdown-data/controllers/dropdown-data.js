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
        const mother_tongues = await strapi.db.query('api::language.language').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const proficiencies = await strapi.db.query('api::fluency.fluency').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const school_boards = await strapi.db.query('api::school-board.school-board').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const completion_years = await strapi.db.query('api::completion-year.completion-year').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const profesions = await strapi.db.query('api::profession.profession').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const relations = await strapi.db.query('api::relation.relation').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const annual_incomes = await strapi.db.query('api::annual-income.annual-income').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const sources = await strapi.db.query('api::source.source').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const elective_subject = await strapi.db.query('api::elective.elective').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const clothing_size = await strapi.db.query('api::size.size').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const laptop_type = await strapi.db.query('api::laptop.laptop').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const dietry = await strapi.db.query('api::dietry.dietry').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const course = await strapi.db.query('api::course-enrollment.course-enrollment').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const project = await strapi.db.query('api::project.project').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const research = await strapi.db.query('api::research.research').findMany({
            select: ['id', 'value'],
            orderBy: { createdAt: 'ASC' },
        });
        const internship = await strapi.db.query('api::internship.internship').findMany({
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
                sources,
                elective_subject,
                clothing_size,
                laptop_type,
                dietry,
                course,
                project,
                research,
                internship
            }
            
        };

        return ctx.send(combinedData);
    } catch (err) {
    ctx.throw(500, err);
    }
  }
};
