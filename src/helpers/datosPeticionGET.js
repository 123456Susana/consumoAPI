//consumiendo APIS 
//1.**PA DONDE** URL DIRECCIONES ENDPOINT CLASIFICAR LOS SERVICIOS URI
const ID_ARTISTA="2FwDTncULUnmANIh7qKa5z"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`


//2. **HACER QUE** CONFIGURAR LA PETICION  METODO GET 
//llamar servicio del token 
import { obtenerToken } from "../services/servicioGenerarToken.js"
let token= await obtenerToken()
console.log(token)
let tokensongs= token.token_type +" "+token.access_token
console.log(tokensongs)

export const PETICION={
    method:"GET",
    headers:{
        Authorization: tokensongs
    }
}