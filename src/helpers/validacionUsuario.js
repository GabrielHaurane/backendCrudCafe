import { check } from "express-validator";
const validacionUsuario =[
check("email")
.notEmpty()
.withMessage("el nombre del usuario es un dato obligatorio")
.matches(/@/)
.withMessage("debe contener el @")
.isLength({
    min:10,
    max:30
})
.withMessage(
    "El mail debe contener como minimo 10 y como maximo 30"
),
check("contrasenia")
.notEmpty()
.withMessage("La contraseña es un dato obligatorio")
.isLength({
    min:8,
    max:20
})
.withMessage(
    "La contraseña es invalida"
)
]
export default validacionUsuario;