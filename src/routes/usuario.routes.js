import { Router } from "express";
import {
  borrarUsuario,
  crearUsuario,
  editarUsuario,
  listarUsuarios,
  obtenerUsuario,
} from "../controllers/usuario.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";

const usuarioRouter = Router();
usuarioRouter
  .route("/usuario")
  .post([validacionUsuario], crearUsuario)
  .get(listarUsuarios);
usuarioRouter
  .route("/usuario/:id")
  .get(obtenerUsuario)
  .delete(borrarUsuario)
  .put(editarUsuario);
export default usuarioRouter;
