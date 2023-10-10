const { db, DataTypes, Model } = require('../db.js');

// TODO - define the Song model
class Song extends Model {};



Song.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length:DataTypes.INTEGER
},
{
    sequelize: db,
    modelName:"Song"

});

console.log(Song);

module.exports = {
    Song
};