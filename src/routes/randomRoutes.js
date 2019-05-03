const Router = require('koa-router');
const dialogsQueries = require('../queries/dialogsQuery');
const Boom = require('boom');
const router = new Router();

/**
 * @apiGroup random
 *
 * @api {get} /Random
 *
 * @apiDescription Return a random dialog
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
router.get('/random', async (ctx) => {
    try {
        const episodes = await dialogsQueries.getEpisode();
        const episode = episodes[Math.floor(Math.random() * episodes.length)];
        const dialogs = await dialogsQueries.getEpisodeDialogs(episode.seasonNumber, episode.episodeNumber);
        const repsonse = dialogs[Math.floor(Math.random() * dialogs.length)];
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
 * @apiGroup Random
 *
 * @api {get} /random/character/:characterName
 *
 * @apiDescription Return a random dialog form one character
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
router.get('/random/character/:characterName', async (ctx) => {
    try {
        const episodes = await dialogsQueries.getCharacterApparitions(ctx.params.characterName);
        console.log(episodes);
        const episode = episodes[Math.floor(Math.random() * episodes.length)];
        console.log(episode);
        const dialogs = await dialogsQueries.getCharacterEpisodeDialogs(ctx.params.characterName, episode.seasonNumber, episode.episodeNumber);
        const repsonse = dialogs[Math.floor(Math.random() * dialogs.length)];
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