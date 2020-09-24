module.exports = (sequelize, DataTypes) => {
  const Worker = sequelize.define('worker', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Worker.associate = function (models) {
  //   Worker.belongsTo(models.worker_work);
  // };

  return Worker;
};
