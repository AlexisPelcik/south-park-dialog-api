const Koa = require('koa');
const Static = require('koa-static');

const server = new Koa();

server
    .use(Static('./src/public'))
    .use(Static('./src/public/doc'))
    .use(require('./src/routes/characterRoutes').routes())
    .use(require('./src/routes/seasonsRoute').routes())
    .use(require('./src/routes/episodesRoute').routes())
    .use(require('./src/routes/dialogsRoute').routes())
    .use(require('./src/routes/randomRoutes').routes())
    .listen(3001);