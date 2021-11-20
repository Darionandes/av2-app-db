
const  {DataTypes} = require("sequelize");
const name = require("path").basename(__filename.replace(".model", ""), ".js");

const sequelize = require('../index').getConnection();

const Curso = sequelize.define(name, {
    descricao: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },

}, {
    sequelize,
    tableName: name,
    timestamps: false,
})

Curso.associate = (models) => {
    
    Curso.belongsTo(models.aluno, {
        foreignKey: {
            name: 'id_curso'
        },
        as: 'aluno'
    })

    Curso.belongsToMany(models.turma, {
        through: 'turma_curso',
        timestamps: false,
        foreignKey: {
            name: 'id_curso'
        },
        as: 'turmas'
    })
}


module.exports = Curso;