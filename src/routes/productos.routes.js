import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, leerPrueba, listarProductos, obtenerProductos } from "../controllers/producto.controllers.js";

// app.get('/prueba', (req, res)=>{
//     // console.log('desde la funcion de prueba')
//     res.send('desde el backend del proyecto crudCafe')
//     })

const productoRouter = Router();
productoRouter.route('/prueba').get(leerPrueba)
productoRouter.route('/productos').post(crearProducto).get(listarProductos)
productoRouter.route('/productos/:id').get(obtenerProductos).delete(borrarProducto).put(editarProducto)
export default productoRouter;