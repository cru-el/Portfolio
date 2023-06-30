const mongoose = require('mongoose');


module.exports = class {
    constructor (name, model) {
        this.element_name = name;
        this._MODEL = model;
    };

    index = (req, res, next) => {
        this._MODEL.find().exec()
        .then(function (item) {
            res.json(item);
        });
    }

    show = (req, res, next) => {
        this._MODEL.findOne({_id: req.params.id}).exec()
        .then(function (item) {
            res.json(item);
        });
    }
};



