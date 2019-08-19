import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Imagenes from './imagen';

const Producto = sequelize.define('producto',{
    id_producto:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre_producto:{
        type: Sequelize.STRING(20)
    },
    descripcion:{
        type: Sequelize.STRING(100)
    },
    marca:{
        type: Sequelize.STRING(20)
    },
    precio:{
        type: Sequelize.FLOAT
    },
    id_subcategoria:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
    freezeTableName: true
});

Producto.hasMany(Imagenes,{foreingkey: 'id_producto', sourcekey:'id_producto'});
Imagenes.belongsTo(Producto,{foreingkey: 'id_producto', sourcekey:'id_producto'});

export default Producto;