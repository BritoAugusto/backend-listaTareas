import Tarea from "../database/models/tareas.js";

export const crearTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({ mensaje: "Tarea creada con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error,no se pudo crear la receta",
    });
  }
};

export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "No se encontraron tareas para mostrar",
    });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error,no se pudo obtener la tarea",
    });
  }
};

export const actualizarTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Tarea actualizada con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error,no se pudo actualizar la tarea",
    });
  }
};

export const borrarTarea = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Tarea eliminada con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Ocurrio un error,no se pudo borrar la tarea",
    });
  }
};
