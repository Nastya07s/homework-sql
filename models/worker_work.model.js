module.exports = (sequelize, DataTypes) => {
  const Worker_work = sequelize.define('worker_work', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // Worker_work.associate = function (models) {
  //   Worker_work.hasMany(models.work, { foreignKey: 'idwork' });
  //   // Worker_work.hasMany(models.worker, { foreignKey: 'idworker' });
  // };

  return Worker_work;
};
