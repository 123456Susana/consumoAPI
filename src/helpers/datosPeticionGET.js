//consumiendo APIS 
//1.**PA DONDE** URL DIRECCIONES ENDPOINT CLASIFICAR LOS SERVICIOS URI
const ID_ARTISTA="2FwDTncULUnmANIh7qKa5z"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`


//2. **HACER QUE** CONFIGURAR LA PETICION  METODO GET 
const TOKEN="Bearer BQBjqnIEObFO_x511hqFp3LP4Gs-ZCrMtARxc67e1A-w6ljsjvFMN2t_K2OTBZ5yRBoO4ito-we7XD4BJMxb9Q61Ag6suOMqZD2OZztWRLXLBLCcVNRgcONRyVWpUzGJHIuCyQImPLZ4mwkhm5_dxvesrgrDCHXWmCirMFq3tjPTZN2O0xJp2RpUbJxPDMmUUZA"

export const PETICION={
    method:"GET",
    headers:{
        Authorization: TOKEN
    }
}