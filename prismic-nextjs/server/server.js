const express = require('express');
const next = require('next');
const compression = require('compression');
const nocache = require('nocache');
const robots = require('express-robots-txt');
const { nextStaticMiddleware, nextNoCachePagesMiddleware, securityMiddleware } = require('@gloojs/next-express');

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    // Middleware
    server.use(compression());
    server.use(robots({ UserAgent: '*', Disallow: '/' }));
    if (dev === false) server.use(nextStaticMiddleware());
    server.use(securityMiddleware());
    server.use(nextNoCachePagesMiddleware());

    // Health check route
    server.get('/health', [nocache()], (req, res) => res.send('ok'));

    server.all('*', (req, res) => {
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on port: ${port}`); // eslint-disable-line no-console
    });
  });
