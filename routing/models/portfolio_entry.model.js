const mongoose = require('mongoose');
const { Technology } = require('./technology.model');

const portfolioEntrySchema = mongoose.Schema( {
    //Key and Sub Parts
    title: { type: String },
    image_url: { type: String },
    description: { type: String },
    github_link: { type: String },
    site_link: { type: String }
});

const PortfolioEntry = module.exports = mongoose.model('Portfolio_Entry', portfolioEntrySchema);