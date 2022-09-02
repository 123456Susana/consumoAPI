//consumo de API

//traigo constantes para CONSUMIR
import {URI,PETICION} from "../helpers/datosPeticionGET.js"

//traigo funcion que CONSUME
import {consultarCanciones} from "./servicioConsultarCanciones.js"

//pintamos las canciones
import { pintarCanciones } from "../controllers/controladorPintarCanciones.js"

//USAMOS LA FUNCION PARA CONSUMIR un api(servicio)
let canciones=await consultarCanciones(URI,PETICION)
console.log(canciones)

//renderizo los datos
pintarCanciones(canciones.tracks)




// .catch(function(error){
//     console.log(error)
// })

