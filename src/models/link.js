module.exports = (Sequelize, DataTypes) => {
    const Link = Sequelize.define('Link', {
      label: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isSocial: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
      }
    })

    Link.associate = (models) => {
        Link.belongsTo(models.Account, {foreignKey: 'accountId'})
    }

    return Link
  }