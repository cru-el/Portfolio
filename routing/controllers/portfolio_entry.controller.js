const PortfolioEntry = require('../models/portfolio_entry.model');
const Control = require('./index.controller');

module.exports = class extends Control {
    constructor() {
        super("PortfolioEntry", PortfolioEntry);
    }
}