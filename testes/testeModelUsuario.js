const { sequelize, Usuario } = require('../models');

Usuario.findAll({include: 'amigos'}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)