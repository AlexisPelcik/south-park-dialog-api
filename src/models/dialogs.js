'use strict';
module.exports = (sequelize, DataTypes) => {
  const dialogs = sequelize.define('dialogs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    seasonNumber:DataTypes.INTEGER,
    episodeNumber:DataTypes.INTEGER,
    episodeName:DataTypes.STRING,
    dialogNumber:DataTypes.INTEGER,
    character:DataTypes.STRING,
    dialog:DataTypes.STRING
  }, {timestamps: false});
  dialogs.associate = function(models) {
    // associations can be defined here
  };
  return dialogs;
};