//consumiendo APIS 
//1.PA DONDE URL DIRECCIONES ENDPOINT CLASIFICAR LOS SERVICIOS URI
const ID_ARTISTA="3AA28KZvwAUcZuOKwyblJQ"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`


//2. CONFIGURAR LA PETICION HACER QUE METODO GET 
const TOKEN="Bearer BQD_Zi3M7x0guKnji0QjXkxc03GFzjpP1RdhK0HpB32d3Xl5cEVHjJ7yJjH9GNVkQja-JRX4LPaBk8rRsD4n9eG4wZC7RaWKCrFBdMhv35cK3EBE7kDwsDUNMQfmhXVk7D7-Jft9RbOE3Wu20Fol8QU1A1KAwqb3qpSYGZOtAK-FgKrqKST-Ae1Py-QvXWtE95I"

export const PETICION={
    method:"GET",
    headers:{
        Authorization: TOKEN
    }
}