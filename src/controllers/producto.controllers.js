import Producto from "../database/model/producto.js"

export const leerPrueba = (req, res)=> {
    res.send('desde el backend del proyecto crudCafe')
}
export const crearProducto = async(req, res)=> {
    try {
        // validar los datos para crear el producto
        // pedir el modelo Producto que genere uno nuevo
        console.log(req.body);
        const productoNuevo = new Producto(req.body);
        // guardo en al BD
        await productoNuevo.save();
        // envio una respuestra al front
        res.status(201).json({
            mensaje: "El producto fue creado correctamente"
        })
    } catch (error) {
        // envio una respuesta al front si algo fallo
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo crear el producto"
        })
    }
}
export const listarProductos = async (req, res) => {
    try {
        // pedirle a la BD la collection de productos
        const arrayProductos = await Producto.find()
        // enviar en al respuesta la lista de productos
        res.status(200).json(arrayProductos)
    } catch (error) {
        // enviar el error de la lista
        console.error(error)
        res.status(404).json({
            mensaje: "Ocurrio un error, no se encontraron los productos"
        })
    }
}
export const obtenerProductos = async (req, res) => {
    try {
        // extraer de la solicitud el id
        console.log(req.params.id)
        // pedirle a la BD que busque el id del producto
        
        // enviar en al respuesta la lista de productos
        
    } catch (error) {
        // enviar el error de la lista
        console.error(error)
        res.status(404).json({
            mensaje: "Ocurrio un error, no se encontraron los productos"
        })
    }
}
