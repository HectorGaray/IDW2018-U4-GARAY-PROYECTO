const status = require('http-status');
const config = require('../_config');
const handler = require('../utils/handler');
const http = require('http');
const async = require('async');
var qr = require('qr-image');
var fs = require('fs');
const path = require('path');
// var async = require('async');

let _cliente;

const getAll = (req, res) => {
    _cliente.find({})
        .sort({})
        .exec(handler.handleMany.bind(null, 'cliente', res));
};

const getById = (req, res) => {
    const { id } = req.params;

    if (id.toString().length != 24) {
        res.status(status.BAD_REQUEST);
        res.json({ err: "Identificador invalido" });
    }
    else {
        _cliente.find({ _id: id })
            .sort({})        
            .exec(handler.handleOne.bind(null, 'cliente', res));
    }
};

const deleteById = (req, res) => {
    //const {id} = req.params;
    const id = req.params.id;
    _cliente.remove({ _id: id }, (err, data) => {
        if (err) {
            res.status(400);
            res.type();
            res.json({ msg: "ALGO PASO NO LE ELIMNIO" });
        }
        else {
            res.status(200);
            res.json({ msg: "CLIENTE BORRADO" });   
        }
    });
};

const createCliente = (req, res) => {
    const cliente = req.body;

    _cliente.create(cliente)
        .then(
            (data) => {
                res.status(200);
                res.json({ msg: "Cliente creada correctamente", data: data });
            }
        )
        .catch(
            (err) => {
                res.status(400);
                res.json({ msg: "Algo mal!!", data: err });
            }
        )
};

const updateById = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    const query = { _id: id };

    _cliente.findOneAndUpdate(query, newData, (err, data) => {
        if (err) {
            res.status(400);
            res.json({ msg: "NO SE PUDO REALIZAR " });
        } else {
            res.status(200);
            res.json({ msg: "CLIENTE ELIMNADO " });
        }
    });
    
};

module.exports = (Clientes) => {
    _cliente = Clientes;
    return ({
        getAll,
        getById,
        deleteById,
        createCliente,
        updateById
    });
}