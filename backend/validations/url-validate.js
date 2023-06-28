const Joi=require('joi');
const urlSchema = Joi.string()
  .regex(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|^(?:(?:[a-zA-Z]{1,9}:(?:\/\/)?)(?:[-;:&=+$,\\w]+@)?[a-zA-Z0-9.-]+|(?:www.|[-;:&=+$,\\w]+@)[a-zA-Z0-9.-]+)((?:\/[+~%\/.\w-_]*)?\??(?:[-\\+=&;%@.\w_]*)#?(?:[\w]*))?/
  );

      
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