import { Router } from "express";
import { leerPrueba } from "../controllers/producto.controllers.js";

// app.get('/prueba', (req, res)=>{
//     // console.log('desde la funcion de prueba')
//     res.send('desde el backend del proyecto crudCafe')
//     })

const productoRouter = Router();
productoRouter.route('/prueba').get(leerPrueba)

export default productoRouter;