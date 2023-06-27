const router=require('express').Router();

router.use('/url',require('./url-router'));

module.exports=router;