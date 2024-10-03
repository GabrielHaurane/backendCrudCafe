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
        const productoBuscado = await Producto.findById(req.params.id)
        // agregar una respuesta adicional cuando productoBuscado es null
        if (!productoBuscado) {
            return res.status(404).json({
                mensaje:"El producto no fue encontrado"
            })
        }
        // enviar en al respuesta la lista de productos
        console.log(productoBuscado)
        res.status(200).json(productoBuscado)
    } catch (error) {
        // enviar el error de la lista
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo obtener el producto"
        })
    }
}
export const borrarProducto = async(req, res)=>{
    try {
        req.params.id
        // quiero saber si esta el id, si no esta contesto con un codigo de error
        const productoBuscado = await Producto.findById(req.params.id)
        if (!productoBuscado) {
            return res.status(404).json({
                mensaje:"El producto no fue encontrado"
            })
        }
        // pero si esta le pido a la BD borrar el producto y envio la respuesta
        await Producto.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje:"El producto fue borrado correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje:"Ocurrio un error al intentar borrar un producto"
        })
    }
}
export const editarProducto = async (req,res) => {
    try {
        // necesito el id y el body
        // validar los datos del body
        // pedir a la BD busque si esta el id, sino envio un codigo de error
        const productoBuscado = await Producto.findById(req.params.id)
        if (!productoBuscado) {
            return res.status(404).json({
                mensaje:"El producto no fue encontrado"
            })
        }
        // pedir a la BD que modifique el producto
        await Producto.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje:"El producto fue editado correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje:"Ocurrio un error al intentar editar un producto"
        })
    }
}