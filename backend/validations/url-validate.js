const Joi=require('joi');
const urlSchema = Joi.string()
  .regex(/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#\[-a-z\d_]*)?$/i);

      
const urlSchemaValidation =(req,res,next) =>{
    console.log(req.body);
    const {error} =urlSchema.validate(req.body.givenUrl);

    if(error){
        return res.status(400).send(error)
    }else{
       next();
    }
}

module.exports ={
    urlSchemaValidation
}