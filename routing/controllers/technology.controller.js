const Technology = require('../models/technology.model');
const Control = require('./index.controller');

module.exports = class extends Control {
    constructor() {
        super("Technology", Technology);
    }
}