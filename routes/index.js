const express = require('express');
const facturaRouter = require('./factura.routes');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/facturas', facturaRouter);
}

module.exports = routerApi;