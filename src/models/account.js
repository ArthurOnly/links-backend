module.exports = (Sequelize, DataTypes) => {
  const Account = Sequelize.define('Account', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
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