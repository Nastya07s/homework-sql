module.exports = (sequelize, DataTypes) => {
  const Worker = sequelize.define("worker", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Worker;
};
