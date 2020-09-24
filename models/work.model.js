module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define('work', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Work.associate = function (models) {
  //   Work.belongsTo(models.worker_work);
  // };

  return Work;
};
