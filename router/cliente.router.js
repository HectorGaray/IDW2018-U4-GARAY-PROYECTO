const router = require('express').Router();

module.exports = (wagner) => {

    const clienteCtrl = wagner.invoke((Cliente) =>
        require('../controllers/cliente.controller')(Cliente));

    router.get('/', (req, res) =>
        clienteCtrl.getAll(req, res));

    router.get('/:id', (req, res) =>
        clienteCtrl.getById(req, res));
        
    router.delete('/delete/:id', (req, res) =>
        clienteCtrl.deleteById(req, res));

    router.post('/', (req, res) =>
        clienteCtrl.createNoticia(req, res));

    router.put('/update/:id', (req, res) =>
        clienteCtrl.updateById(req, res));


    return router;
}

