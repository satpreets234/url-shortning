const mongoose=require('mongoose');
async function connection (){
    mongoose.connect('mongodb+srv://root:root@cluster0.rhtxjhj.mongodb.net/url_db').then((success)=>{
        console.log('Database connection established!');
        }).catch((error)=>{
            console.log(error);
        })
}
module.exports={connection};
