const express = require('express');
const router = express.Router();

const TechnologyController = require('../controllers/technology.controller');
const PortfolioEntryController = require('../controllers/portfolio_entry.controller');

const technology_controller = new TechnologyController;
const portfolio_entry_controller = new PortfolioEntryController;


/*      INDEX       */
router.get('/technology', technology_controller.index);
router.get('/portfolio_entry', portfolio_entry_controller.index);

/*      SHOW       */
router.get('/technology/:id', technology_controller.show);
router.get('/portfolio_entry/:id', portfolio_entry_controller.show);

module.exports = router;