const { Router } = require('express')
const profeRouter = Router()
const { postProfesores, filtros } = require('./functions.js');

profeRouter.get("/", async (req, res) => {   
    try {
        const { materia, dia, hora } = req.query
        const response =  await filtros(materia, dia, hora)
        res.status(200).json(response)
    } catch (error) {
     res.status(400).json(error.message)
    } 
 })

profeRouter.post("/", async (req, res) => {
    try {
        const data = req.body
        console.log(data);
        await postProfesores(data)
        res.status(200).json("Profesor subido con éxito")
    } catch (error) {
        res.status(400).json(error.message)
    }
}) 

module.exports = profeRouter;