import{generarURI} from "../helpers/generarURI.js"
import{PETICION} from "../helpers/datosPeticionGET.js"
import{consultarCanciones} from "../services/servicioConsultarCanciones.js"
import { pintarCanciones } from "../controllers/controladorPintarCanciones.js"

let botonArtista=document.getElementById("botonbuscar")
botonArtista.addEventListener("click", function(evento){

  let artista=document.getElementById("artista")
  
  const URI= generarURI(artista.value)
  
  async function activarServicio(){
    let canciones=await consultarCanciones(URI,PETICION)
  console.log(canciones)
  pintarCanciones(canciones.tracks)
  }

  activarServicio()
  
  

})