const Router = require('koa-router');
const dialogsQueries = require('../queries/dialogsQuery');
const Boom = require('boom');

const router = new Router();

/**
 * @apiGroup Episodes
 *
 * @api {get} /episodes
 *
 * @apiDescription Return all episodes
 *
 * @apiSuccess {Number} id
 * @apiSuccess {Number} seasonNumber
 * @apiSuccess {Number} episodeNumber
 * @apiSuccess {String} episodeName
 * @apiExample {json} success:
 * {
  "status":"success",
  "data":[
    {
      "seasonNumber":1,
      "episodeNumber":1,
      "episodeName":"Scott Tenorman Must Die",
    },{
      "seasonNumber":1,
      "episodeNumber":2,
      "episodeName":"It Hits the Fan",
    },{
      "seasonNumber":1,
      "episodeNumber":3,
      "episodeName":"Cripple Fight",
    },{
      "seasonNumber":1,
      "episodeNumber":4,
      "episodeName":"Super Best Friends",
    }
  ]
}
 */
router.get('/episodes', async (ctx) => {
    try {
        const episodes = await dialogsQueries.getEpisode();
        ctx.body = {
            status: 'success',
            data: episodes,
        }
    }catch (e) {
        console.log(e);
        Boom.badImplementation();
    }
});

/**
 * @apiGroup Episodes
 *
 * @api {get} /episodes/season/:seasonsNumber
 *
 * @apiDescription Return all episodes of one season
 *
 * @apiSuccess {Number} id
 * @apiSuccess {Number} seasonNumber
 * @apiSuccess {Number} episodeNumber
 * @apiSuccess {String} episodeName
 * @apiExample {json} success:
 * {
  "status":"success",
  "data":[
    {
      "episodeNumber":1,
      "episodeName":"Scott Tenorman Must Die",
    },{
      "episodeNumber":2,
      "episodeName":"It Hits the Fan",
    },{
      "episodeNumber":3,
      "episodeName":"Cripple Fight",
    },{
      "episodeNumber":4,
      "episodeName":"Super Best Friends",
    }
  ]
}
 */
router.get('/episodes/season/:seasonsNumber', async (ctx, next) => {
    try {
        const episode = await dialogsQueries.getSeasonEpisodes(ctx.params.seasonsNumber);
        ctx.body = {
            status: 'success',
            data: episode,
        }

    }catch (e) {
        console.log(e);
        Boom.badImplementation();
    }
});

module.exports = router;