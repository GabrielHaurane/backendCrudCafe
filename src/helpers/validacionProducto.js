import { check } from "express-validator";
const validacionProducto = [
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
        throw new Error("El precio debe estar entre $50 y $20000 inclusive");
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
    .isIn(["Infusiones", "Batidos", "Dulce", "Salado"])
    .withMessage(
      "la categoria debe contener una de las sig opciones: Infusiones ,Batidos ,Dulce ,Salado"
    ),
  check("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion del producto es un dato obligatorio")
    .isLength({
      min: 5,
      max: 50,
    })
    .withMessage(
      "La descripcion del producto debe contener como minimo 5 y como maximo 50 caracteres"
    ),
    check("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion del producto es un dato obligatorio")
    .isLength({
      min: 10,
      max: 250,
    })
    .withMessage(
      "La descripcion del producto debe contener como minimo 10 y como maximo 250 caracteres"
    ),
  
  // (req,res, next)=> validationResult
];

export default validacionProducto;
