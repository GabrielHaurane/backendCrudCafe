import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  leerPrueba,
  listarProductos,
  obtenerProductos,
} from "../controllers/producto.controllers.js";
import { check } from "express-validator";

// app.get('/prueba', (req, res)=>{
//     // console.log('desde la funcion de prueba')
//     res.send('desde el backend del proyecto crudCafe')
//     })

const productoRouter = Router();
productoRouter.route("/prueba").get(leerPrueba);
productoRouter
  .route("/productos")
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("el nombre del producto es un dato obligatorio")
        .isLength({
          min: 2,
          max: 50,
        })
        .withMessage(
          "El nombre del producto debe contener como minimo 2 y como maximo 50 caracteres"
        ),
      check("precio")
        .notEmpty()
        .withMessage("El precio es un dato obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser un numero")
        .custom((valorPrecio) => {
          if (valorPrecio >= 50 && valorPrecio <= 20000) {
            return true;
          } else {
            throw new Error(
              "El precio debe estar entre $50 y $20000 inclusive"
            );
          }
        }),
      check("imagen")
        .notEmpty()
        .withMessage("La imagen es un dato obligatorio")
        .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
        .withMessage(
          "La imagen debe ser una URL valida y terminar en alguna de las siguientes extensiones: jpg, jpeg, gif o png"
        ),
        check("categoria")
        .notEmpty()
        .withMessage("El categoria es un dato obligatorio")
        .isIn(['Infusiones','Batidos','Dulce','Salado'])
        .withMessage("la categoria debe contener una de las sig opciones: Infusiones ,Batidos ,Dulce ,Salado")
    ],
    crearProducto
  )
  .get(listarProductos);
productoRouter
  .route("/productos/:id")
  .get(obtenerProductos)
  .delete(borrarProducto)
  .put(editarProducto);
export default productoRouter;
