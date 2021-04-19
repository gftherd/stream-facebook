let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});


var facebookController = require('./controller/facebook');


router.route('/comment/:id')
    .get(facebookController.Comment);



module.exports = router;