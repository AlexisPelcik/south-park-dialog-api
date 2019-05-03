const Router = require('koa-router');
const Boom = require('boom');
const dialogsQueries = require('../queries/dialogsQuery');

const router = new Router();

/**
 * @apiGroup Dialogs
 *
 * @api {get} /dialogs/:id
 *
 * @apiDescription Return dialog by id
 *
 * @apiSuccess {Number} id
 * @apiSuccess {Number} seasonNumber
 * @apiSuccess {Number} episodeNumber
 * @apiSuccess {String} episodeName
 * @apiSuccess {Number} dialogNumber
 * @apiSuccess {String} character
 * @apiSuccess {String} dialog
 * @apiExample {json} success:
 * {
  "status":"success",
  "data":[
    {
      "id":1005,
      "seasonNumber":15,
      "episodeNumber":5,
      "episodeName":"Crack Baby Athletic Association",
      "dialogNumber":174,
      "character":"Roger",
      "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
    }
  ]
}
 */
router.get('/dialogs/:id', async (ctx) => {
    try {
        const episodes = await dialogsQueries.getDialog(ctx.params.id);
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
 * @apiGroup Dialogs
 *
 * @api {get} /dialogs/season/:seasonNumber/episode/:episodeNumber
 *
 * @apiDescription Return dialogs by seasonNumber and episodeNumber
 *
 * @apiSuccess {Number} id
 * @apiSuccess {Number} seasonNumber
 * @apiSuccess {Number} episodeNumber
 * @apiSuccess {String} episodeName
 * @apiSuccess {Number} dialogNumber
 * @apiSuccess {String} character
 * @apiSuccess {String} dialog
 * @apiExample {json} success:
 * {
  "status":"success",
  "data":[
    {
      "id":1005,
      "seasonNumber":15,
      "episodeNumber":5,
      "episodeName":"Crack Baby Athletic Association",
      "dialogNumber":174,
      "character":"Roger",
      "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
    }
  ]
}
 */
router.get('/dialogs/season/:seasonNumber/episode/:episodeNumber', async (ctx) => {
    try {
        const episodes = await dialogsQueries.getEpisodeDialogs(ctx.params.seasonNumber, ctx.params.episodeNumber);
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
 * @apiGroup Dialogs
 *
 * @api {get} /dialogs/character/:name/season/:seasonNumber
 *
 * @apiDescription Return all dialogs of a character in one season
 *
 * @apiSuccess {Number} id
 * @apiSuccess {Number} seasonNumber
 * @apiSuccess {Number} episodeNumber
 * @apiSuccess {String} episodeName
 * @apiSuccess {Number} dialogNumber
 * @apiSuccess {String} character
 * @apiSuccess {String} dialog
 * @apiExample {json} success:
 * {
  "status":"success",
  "data":[
    {
      "id":1005,
      "seasonNumber":15,
      "episodeNumber":5,
      "episodeName":"Crack Baby Athletic Association",
      "dialogNumber":174,
      "character":"Roger",
      "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
    }
  ]
}
 */
router.get('/dialogs/character/:name/season/:seasonNumber', async (ctx, next) => {
    try {
        const repsonse = await dialogsQueries.getCharacterSeasonDialogs(ctx.params.name, ctx.params.seasonNumber);
        ctx.body = {
            status: 'success',
            data: repsonse
        };
    } catch (e) {
        console.log(e);
        Boom.badImplementation();
    }
});

/**
 * @apiGroup Dialogs
 *
 * @api {get} /dialogs/character/:name/season/:seasonNumber/episode/:episodeNumber
 *
 * @apiDescription Return all dialogs of a character in one episode
 *
 * @apiSuccess {Number} id
 * @apiSuccess {Number} seasonNumber
 * @apiSuccess {Number} episodeNumber
 * @apiSuccess {String} episodeName
 * @apiSuccess {Number} dialogNumber
 * @apiSuccess {String} character
 * @apiSuccess {String} dialog
 * @apiExample {json} success:
 * {
  "status":"success",
  "data":[
    {
      "id":1005,
      "seasonNumber":15,
      "episodeNumber":5,
      "episodeName":"Crack Baby Athletic Association",
      "dialogNumber":174,
      "character":"Roger",
      "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
    }
  ]
}
 */
router.get('/dialogs/character/:name/season/:seasonNumber/episode/:episodeNumber', async (ctx, next) => {
    try {
        const repsonse = await dialogsQueries.getCharacterEpisodeDialogs(ctx.params.name, ctx.params.seasonNumber, ctx.params.episodeNumber);
        ctx.body = {
            status: 'success',
            data: repsonse
        };
    } catch (e) {
        console.log(e);
        Boom.badImplementation();
    }
});

/**
 * @apiGroup Dialogs
 *
 * @api {get} /dialogs/character/:name
 *
 * @apiDescription Return all dialogs of one character
 *
 * @apiSuccess {Number} id
 * @apiSuccess {Number} seasonNumber
 * @apiSuccess {Number} episodeNumber
 * @apiSuccess {String} episodeName
 * @apiSuccess {Number} dialogNumber
 * @apiSuccess {String} character
 * @apiSuccess {String} dialog
 * @apiExample {json} success:
 * {
  "status":"success",
  "data":[
    {
      "id":1005,
      "seasonNumber":15,
      "episodeNumber":5,
      "episodeName":"Crack Baby Athletic Association",
      "dialogNumber":174,
      "character":"Roger",
      "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
    }
  ]
}
 */
router.get('/dialogs/character/:name', async (ctx, next) => {
    try {
        const repsonse = await dialogsQueries.getCharacterDialogs(ctx.params.name);
        ctx.body = {
            status: 'success',
            data: repsonse
        };
    } catch (e) {
        console.log(e);
        Boom.badImplementation();
    }
});

module.exports = router;