const Router = require('koa-router');
const dialogsQueries = require('../queries/dialogsQuery');
const Boom = require('boom');

const router = new Router();

/**
 * @apiGroup Seasons
 *
 * @api {get} /seasons
 *
 * @apiDescription Return all season
 *
 * @apiSuccess {Number} seasonNumber
 * @apiExample {json} success:
 * {
  "status":"success",
  "data":[
    {
      "seasonNumber":1
    },{
      "seasonNumber":2
    },{
      "seasonNumber":3
    },{
      "seasonNumber":4
    },{
      "seasonNumber":5
    }
  ]
}
 */
router.get('/seasons', async (ctx, next) => {
    try {
        const saisons = await dialogsQueries.getSeasons();
        ctx.body = {
            status: 'success',
            data: saisons,
        }

    }catch (e) {
        console.log(e);
        Boom.badImplementation();
    }
});

module.exports = router;