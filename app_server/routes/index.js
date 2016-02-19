var express = require('express');
var router = express.Router();

//var ctrlMain = require('../controllers/main');

////////Require controller files
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
////////

////define location routes and map them to controller functions////
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
//////

/// defining other routers/////
/* Other pages */
router.get('/about', ctrlOthers.about);
///
module.exports = router;


/* GET home page. */
//router.get('/', ctrlMain.index);  


