//Impptamos el modelo
import BlogModel from "../models/BlogModel.js";

//Metodos para el CRUD

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Mostrar un registro
export const getBlog = async (req, res) => {
    try {
      console.log(`Buscando registro con ID ${req.params.id}`);
      const blog = await BlogModel.findOne({
        where: { id: parseInt(req.params.id) }
      })
      console.log(`Resultado: ${blog}`);
      if (!blog) {
        res.status(404).json({ message: 'Registro no encontrado' })
      } else {
        res.json(blog)
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      res.json({ message: error.message })
    }
  }

//Crear un registro
export const createBlog = async (req, res) =>{
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}
//Actualizar un registro
export const updateBlog = async (req, res) => {
  try {
      await BlogModel.update(req.body, {
          where: { id: req.params.id}
      })
      res.json({
          "message":"¡Registro actualizado correctamente!"
      })
  } catch (error) {
      res.json( {message: error.message} )
  }
}

//Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json( {message: error.message})
    }
}