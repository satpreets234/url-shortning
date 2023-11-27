const mongoose=require('mongoose');
async function connection (){
    mongoose.connect(process.env.MONGO_URI).then((success)=>{
        console.log('Database connection established!');
        }).catch((error)=>{
            console.log(error);
        })
}
module.exports={connection};
