import Sequelize from 'sequelize';
import {sequelize} from '../database/database';

const SubCategoria = sequelize.define('subcategoria',{
    id_subcategoria: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_subcategoria:{
        type: Sequelize.STRING(50)
    },
    linkimagen:{
        type: Sequelize.STRING(100)
    },
    id_categoria: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
    freezeTableName: true
});

export default SubCategoria;