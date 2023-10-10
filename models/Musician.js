const { db, Model, DataTypes } = require('../db.js');

// TODO - define the Musician model
class Musician extends Model {}

Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
}, {
    sequelize: db,
    modelName: "Musician"
}); 

console.log(Musician)


module.exports = Musician;