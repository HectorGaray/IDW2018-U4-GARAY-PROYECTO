const router = require('express').Router();

module.exports = (wagner) => {

    const productoCtrl = wagner.invoke((Producto) =>
        require('../controllers/producto.controller')(Producto));

    router.get('/', (req, res) =>
        productoCtrl.getAll(req, res));

    router.get('/:id', (req, res) =>
        productoCtrl.getById(req, res));

    router.delete('/delete/:id', (req, res) =>
        productoCtrl.deleteById(req, res));

    router.post('/', (req, res) =>
        productoCtrl.createUser(req, res));

    router.put('/update/:id', (req, res) =>
        productoCtrl.updateById(req, res));

    router.get('/qr/:id', (req, res) =>
        productoCtrl.codeQR(req, res));

    return router;
}

