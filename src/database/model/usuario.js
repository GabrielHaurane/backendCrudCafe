import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    email:{
        type: String,
        required:true,
        lowercase:true,
        trim:true,
        minLength:10,
        maxLength:30,
        unique:true
    },
    contrasenia:{
        type: String,
        required: true,
        minLength:8,
        maxLength:20,
        trim:true,
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario;