const router=require('express').Router();
const urlController= require('../controllers/url-controllers');
const validations=require('../validations/url-validate');

router.post('/',validations.urlSchemaValidation,urlController.postUrl)
router.get('/',urlController.getAllUrls);
router.get('/:shortId',urlController.redirecturl);


module.exports=router;