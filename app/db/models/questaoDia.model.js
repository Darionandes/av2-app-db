
const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const QuestaoDia = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

QuestaoDia.associate = (models) => {
    QuestaoDia.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_aluno'
        },
        as: 'aluno'
    })
    QuestaoDia.belongsTo(models.Questao, {
        foreignKey: {
            name: 'id_questaodia'
        },
        as: 'questao'
    })
}


module.exports = QuestaoDia;