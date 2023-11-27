// // actor-movie-association.js
// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../connection/connection');
// const actorModel=require('./actor-model')
// const movieModel=require('./movie-model')
// class ActorMovieAssociation extends Model {}

// ActorMovieAssociation.init({
//   MovieId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: movieModel, // 'Movies' would also work
//       key: 'id'
//     }
//   },
//   ActorId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: actorModel, // 'Actors' would also work
//       key: 'id'
//     }
//   }
// },{sequelize});
// // actorModel.belongsToMany(movieModel,{through:ActorMovieAssociation})
// // movieModel.belongsToMany(actorModel,{through:ActorMovieAssociation})
// console.log(actorModel,2);
// console.log(movieModel,3);
// ActorMovieAssociation.sync({alter:true}).then(()=>{})
// module.exports = ActorMovieAssociation;
