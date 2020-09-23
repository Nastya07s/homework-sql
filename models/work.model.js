module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define("work", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Work;
};
