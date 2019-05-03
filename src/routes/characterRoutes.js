const Router = require('koa-router');
const Boom = require('boom');
const dialogsQueries = require('../queries/dialogsQuery');

const router = new Router();

/**
 * @apiGroup Characters
 *
 * @api {get} /characters
 *
 * @apiDescription Return all characters
 * available
 *
 * @apiSuccess {String} character name
 *
 * @apiExample {json} success:
 * {
  "status":"success",
  "data":[
    {"character":"Kenny"},
    {"character":"Stan"},
    {"character":"Cartman"}
    ]
}
 *
 */
router.get('/characters', async (ctx, next) => {
    try {
        const repsonse = await dialogsQueries.getCharacters();
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
 * @apiGroup Characters
 *
 * @api {get} /characters/:characterName
 *
 * @apiDescription Return all episodes
 * of one character
 *
 * @apiSuccess {Number} season Number
 * @apiSuccess {Number} episode Number
 * @apiSuccess {String} episode Name
 *
 * @apiExample {json} success:
 {
  "status":"success",
  "data":[
    {"seasonNumber":1,"episodeNumber":1,"episodeName":"Cartman Gets an Anal Probe"},
    {"seasonNumber":1,"episodeNumber":2,"episodeName":"Weight Gain 4000"},
    {"seasonNumber":1,"episodeNumber":3,"episodeName":"Volcano"}
    ],
}
 */
router.get('/characters/:characterName', async (ctx, next) => {
    try {
        const repsonse = await dialogsQueries.getCharacterApparitions(ctx.params.characterName);
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