const urlModel=require('../models/url-model');
const {Op}=require('sequelize');
const shortId=require('shortid');
const qrCode=require('qrcode');
const fs=require('fs');

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

const generateQRCode = async (url) => {
    try {
      const qrCodeDataURL = await qrCode.toDataURL(url);
      const timestamp = new Date().getTime(); // Get the current timestamp
      const filename = `${timestamp}.png`; // Generate a unique filename using the timestamp
      const qrCodeFilePath = `uploads/qrImages/${filename}`; // Define the path and filename for the QR code image
      await fs.promises.writeFile(qrCodeFilePath, qrCodeDataURL.split(';base64,').pop(), { encoding: 'base64' });
      console.log(qrCodeFilePath);
      return qrCodeFilePath;
    } catch (error) {
      console.error('Error generating QR code:', error);
      return null;
    }
  };
  

const postUrl= async (req,res) =>{
    try {
        const originalUrl=req.body.givenUrl;
        const alreadyUrls=await urlModel.findOne({ where: { givenUrl:originalUrl  } })
        if(alreadyUrls){
           return res.status(400).send("Already shortened this url !")
        }else{
            let newShortId=shortId.generate()
            const baseUrl=process.env.BASE_URL;
            let qrCodeUrl=await generateQRCode(originalUrl,originalUrl)
            console.log(qrCodeUrl);
            const newUrlEntry=await urlModel.create({
                givenUrl:originalUrl,shortUrl:`${baseUrl}${newShortId}`,
                clicks:0,qrImagelocation:qrCodeUrl
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
        const createdAt = new Date(findUrl.createdAt); // Convert to JS Date object
        if(findUrl && createdAt.getTime()+ 1000*60*60*24 >= Date.now()){
           const updateUrlAttribute=await findUrl.update({clicks:findUrl.clicks+1},{where:{shortUrl}});
            return res.redirect(findUrl.givenUrl);
        }else if(findUrl && createdAt.getTime()+ 1000*60*60*24 < Date.now()){
            const updateUrlAttribute=await findUrl.update({clicks:findUrl.clicks+1},{where:{shortUrl}});
             return res.status(404).send('Link expired !')
         }
        else{
           return res.status(404).send('No Url found !')
        }
    } catch (error) {
       return res.status(500).send(error.message)
    }    
}
module.exports={
    getAllUrls,postUrl,redirecturl
}
