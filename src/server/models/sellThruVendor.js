module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "sellThruVendor",
    {
      idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "idx",
      },
      vendor: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
      tableName: "sellThruVendor",
    }
  );
};
