import { Router } from 'express';
import { createSubCategoria, getSubCategorias, getOneSubCategoria, deleteOnSubCategoria, updateSubCategorias, getSubCategoriaspoxp, getSubCategoriasPorCategoria} from '../controllers/dao.subcategorias';

const router = Router();

// /api/subcategorias
router.post('/',createSubCategoria);
router.get('/',getSubCategorias);
router.get('/PorCategoria',getSubCategoriasPorCategoria);

// /api/subcategorias/:id_subcategoria
router.get('/:id_subcategoria',getOneSubCategoria);
router.get('/PorCategoria/:id_categoria',getSubCategoriaspoxp);
router.delete('/:id_subcategoria',deleteOnSubCategoria);
router.put('/:id_subcategoria',updateSubCategorias);

export default router;