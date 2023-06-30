const mongoose = require('mongoose');

const technologySchema = mongoose.Schema( {
    //Key and Sub Parts
    name: { type: String },
    image_url: { type: String },
});

const Technology = module.exports = mongoose.model('Technology', technologySchema);