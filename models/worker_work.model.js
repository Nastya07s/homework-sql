module.exports = (sequelize, DataTypes) => {
  const Worker_work = sequelize.define("worker_work", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idwork:{
      type: DataTypes.UUID,
      allowNull: false
    },
    idworker:{
      type: DataTypes.UUID,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Worker_work;
};
