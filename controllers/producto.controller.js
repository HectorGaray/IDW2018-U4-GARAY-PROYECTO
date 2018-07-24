const status = require('http-status');
const config = require('../_config');
const handler = require('../utils/handler');
const http = require('http');
const async = require('async');
var qr = require('qr-image');
var fs = require('fs');
const path = require('path');
// var async = require('async');
var qr = require('qr-image');

let _producto;

const getAll = (req, res) => {
    _producto.find({})
        .sort({})
        .exec(handler.handleMany.bind(null, 'productos', res));
};

const getById = (req, res) => {
    const { id } = req.params;
    //const id = req.params.id;

    if (id.toString().length != 24) {
        res.status(status.BAD_REQUEST);
        res.json({ err: "Identificador invalido" });
    }
    else {
        _producto.find({ _id: id })
            .sort({})
            .exec(handler.handleOne.bind(null, 'producto', res));
    }
};

const deleteById = (req, res) => {
    //const {id} = req.params;
    const id = req.params.id;
    _producto.remove({ _id: id }, (err, data) => {
        if (err) {
            res.status(400);
            res.json({ msg: "No se pudo realizar la operación, intente nuevamente" });
        }
        else {
            res.status(200);
            res.json({ msg: "El producto elimino correctamente" });

        }
    });
};

const createProducto = (req, res) => {
    const user = req.body;

    _user.create(producto)
        .then(
            (data) => {
                res.status(200);
                res.json({ msg: "Producto creado correctamente", data: data });
            }
        )
        .catch(
            (err) => {
                res.status(400);
                res.json({ msg: "Algo va mal!!!", data: err });
            }
        )
};

const updateById = (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    const query = { _id: id };

    _producto.findOneAndUpdate(query, newData, (err, data) => {
        if (err) {
            res.status(400);
            res.json({ msg: "No se pudo realizar la operación, intente nuevamente" });
        } else {
            res.status(200);
            res.json({ msg: "El producto se modificó correctamente" });
        }
    });
    //const {id} = req.params;
};


module.exports = (Producto) => {
    _producto = Producto;
    return ({
        getAll,
        getById,        
        deleteById,
        createProducto,
        updateById,        
    });
}