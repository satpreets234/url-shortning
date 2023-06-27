const urlModel=require('../models/url-model');
const {Op}=require('sequelize');
const shortId=require('shortid');

const getAllUrls= async (req,res) =>{
    try {
        const allurls=await urlModel.findAll({});
        if(allurls.length>0){
            res.status(200).send(allurls)
        }else{
            res.status(404).send('No url found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
}

const postUrl= async (req,res) =>{
    try {
        const originalUrl=req.body.givenUrl;
        const alreadyUrls=await urlModel.findOne({ where: { givenUrl:originalUrl  } })
        if(alreadyUrls){
           return res.status(400).send("Already shortened this url !")
        }else{
            let newShortId=shortId.generate()
            const baseUrl=process.env.BASE_URL;
            const newUrlEntry=await urlModel.create({
                givenUrl:originalUrl,shortUrl:`${baseUrl}${newShortId}`,
                clicks:0
            });
            if(newUrlEntry){
               return res.status(200).send(newUrlEntry)
            }else{
                return res.status(400).send("Cannot create")
            }
        }
    } catch (error) {
        console.log(error);
       return res.status(500).send(error.message)
    }
}

const redirecturl =async (req,res) =>{
    try {
    const {shortId}=req.params;
    const shortUrl=`${process.env.BASE_URL}${shortId}`
        const findUrl=await urlModel.findOne({where:{shortUrl}});
        if(findUrl){
           const updateUrlAttribute=await findUrl.update({clicks:findUrl.clicks+1},{where:{shortUrl}});
            return res.redirect(findUrl.givenUrl);
        }else{
           return res.status(404).send('No Url found !')
        }
    } catch (error) {
       return res.status(500).send(error.message)
    }    
}
module.exports={
    getAllUrls,postUrl,redirecturl
}
