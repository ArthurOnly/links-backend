module.exports = (Sequelize, DataTypes) => {
  const Account = Sequelize.define('Account', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jwtVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  })

  Account.associate = models => {
    Account.hasMany(models.Link, {foreignKey: 'accountId'})
  }

  Account.prototype.toJSON = function(){
    const fields = { ...this.get() }
    delete fields.password

    return fields
  }

  return Account
}