const Joi=require('joi');
const urlSchema = Joi.string()
  .regex(/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/);

      
const urlSchemaValidation =(req,res,next) =>{
    console.log(req.body);
    const {error} =urlSchema.validate(req.body.givenUrl);

    if(error){
        return res.status(400).send(error.message)
    }else{
       next();
    }
}

module.exports ={
    urlSchemaValidation
}