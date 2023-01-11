const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { Profesores } = require('../db.js');

// Obtener los profesores de FireBase y subirlos a la db
const getProfesores = async () => {
    let response = await fetch(`https://proff-c2bca-default-rtdb.firebaseio.com/.json`);
    let commits = await response.json();
    commits.forEach(async (profesor) => {
        await Profesores.findOrCreate({where: { nombre: profesor.nombre }, 
            defaults: {
              materia: profesor.materia,
              foto: profesor.foto,
              celular: profesor.celular,
              biografia: profesor.biografia,
              costo: profesor.costo,
              dia: profesor.dia, 
              horaInicio: profesor.horaInicio,
              horaFin: profesor.horaFin,
            }
        }) 
    })

    let Profes = await Profesores.findAll()
    return Profes
}

const postProfesores = async (data) => {
    await Profesores.findOrCreate({where: { nombre: data.nombre }, 
        defaults: {
          materia: data.materia,
          foto: data.foto,
          celular: data.celular, 
          biografia: data.biografia,
          costo: data.costo,
          dia: data.dia, 
          horaInicio: data.horaInicio,
          horaFin: data.horaFin,
        }
    }) 
}

const filtros = async ( materia, dia, hora ) => {
    let profesores = await getProfesores()
    
    if(!materia && !dia && !hora) {
        return []
    }
    else if(materia && !dia && !hora) {
        profesores = profesores.filter(profesor => profesor.materia === materia)
        return profesores
    }
    else if(!materia && dia && !hora) {
        profesores = profesores.filter(profesor => profesor.dia === dia)
        return profesores
    } 
    else if(!materia && !dia && hora) {
        profesores = profesores.filter(profesor => profesor.horaInicio.includes(hora))
        return profesores
    } 
    else if(materia && dia && !hora) {
        profesores = profesores.filter(profesor => profesor.materia === materia)
        profesores = profesores.filter(profesor => profesor.dia === dia)
        return profesores
    }
    else if(materia && !dia && hora) {
        profesores = profesores.filter(profesor => profesor.materia === materia)
        profesores = profesores.filter(profesor => profesor.horaInicio.includes(hora))
        return profesores
    } 
    else if(!materia && dia && hora) {
        profesores = profesores.filter(profesor => profesor.dia === dia)
        profesores = profesores.filter(profesor => profesor.horaInicio.includes(hora))
        return profesores
    } 
    else if(materia && dia && hora) {
        profesores = profesores.filter(profesor => profesor.materia === materia)
        profesores = profesores.filter(profesor => profesor.dia === dia)
        profesores = profesores.filter(profesor => profesor.horaInicio.includes(hora))
        return profesores
    } 

} 

module.exports = { getProfesores, postProfesores, filtros }