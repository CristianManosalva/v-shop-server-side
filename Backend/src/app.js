import express, { json } from 'express';
import morgan from 'morgan';

//Importing routers
import productoRoutes from './routes/productos';
import categoriasRoutes from './routes/categorias';
import subcategoriasRoutes from './routes/subcategorias';
import usersRoutes from './routes/usuarios';

//initialization
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/productos',productoRoutes);
app.use('/api/categorias',categoriasRoutes);
app.use('/api/subcategorias',subcategoriasRoutes);
app.use('/usuario',usersRoutes);


export default app;