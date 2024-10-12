import { Router } from "express";
import { actualizarTarea, borrarTarea, crearTarea, listarTareas, obtenerTarea } from "../controllers/tareas.controllers.js";
import validacionTareas from "../helpers/validacionTareas.js";

const tareasRouter = Router()

tareasRouter.route("/tareas")
.post([validacionTareas],crearTarea)
.get(listarTareas)

tareasRouter.route("/tareas/:id")
.get(obtenerTarea)
.put([validacionTareas],actualizarTarea)
.delete(borrarTarea)

export default tareasRouter;