//GENERAR UN TOKEN AUTOMATICO- TIPO POST

//URI
const URI="https://accounts.spotify.com/api/token"

//DATOS DE ENVIO
// X- WWW.FORM
const DATO1="grant_type=client_credentials"
const DATO2="client_id=d8800683a907453ca07f8e0395a69132"
const DATO3="client_secret=7d712e3569bf449e88f2a33dca84ba2c"

//PARAMETROS PETICION
const PETICION={
  method: "POST",
  headers:{"Content-Type":"application/x-www-form-urlencoded"},
  body: DATO1 + "&" + DATO2 + "&" + DATO3
}

//FETCH
//PROMESA
fetch(URI,PETICION)
.then(function(respuesta){
  return respuesta.json()
})
.then(function(respuesta){
  console.log(respuesta)
})
.catch(function(respuesta){
  console.log(respuesta)
})

//ASYNC AWAIT
export async function obtenerToken(){
  let respuesta= await fetch(URI,PETICION)
  return await respuesta.json()
}

console.log(await obtenerToken())