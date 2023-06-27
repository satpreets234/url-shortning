const {DataTypes}=require('sequelize');
const sequelize =require('../connection/connection')
const urlModel= sequelize.define('Urls',{
    givenUrl:{
        type:DataTypes.STRING,
        allownull:false,
        unique:true
    },
    shortUrl:{
        type:DataTypes.STRING,
        allownull:false,
        unique:true
    },
    date:{
        type:DataTypes.DATE,
        defaultValue:Date.now()
    },
    clicks:{
        type:DataTypes.INTEGER,
        defaultValue:0,
        allownull:true
    }

});

urlModel.sync().then((success)=>{
    console.log(success);
}).catch((error)=>{
    console.log(error);
})
module.exports= urlModel;