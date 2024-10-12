import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
  tarea: {
    required: true,
    type: String,
    minLength: 5,
    maxLength: 100,
  },
});

const Tarea = mongoose.model("tarea", tareaSchema);
export default Tarea;
