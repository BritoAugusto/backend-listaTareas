import { Router } from "express";
import { actualizarTarea, borrarTarea, crearTarea, listarTareas, obtenerTarea } from "../controllers/tareas.controllers.js";

const tareasRouter = Router()

tareasRouter.route("/tareas")
.post(crearTarea)
.get(listarTareas)

tareasRouter.route("/tareas/:id")
.get(obtenerTarea)
.put(actualizarTarea)
.delete(borrarTarea)

export default tareasRouter;