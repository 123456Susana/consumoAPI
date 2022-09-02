import {URI,PETICION} from "../helpers/datosPeticionGET.js"

//3.arranca pues
//consumo de API
fetch(URI,PETICION)

.then(function(respuesta){
    return  respuesta.json()
})

.then(function(respuesta){

    console.log(respuesta)
    console.log(respuesta.tracks)

    let fila=document.getElementById("fila")

    // respuesta.tracks.forEach(function(cancion){

    //     let columna=document.createElement("div")
    //     columna.classList.add("col")

    //     let tarjeta=document.createElement("div")
    //     tarjeta.classList.add("card","shadow","p-3","h-100")
        
    //     let audio=document.createElement("audio")
    //     audio.src=cancion.preview_url
    //     audio.classList.add( "w-100")
    //     audio.setAttribute("controls","controls")

    //     let nombre=document.createElement("h4")
    //     nombre.classList.add("text-center")
    //     nombre.textContent=cancion.name

    //     let imagen=document.createElement("img")
    //     imagen.classList.add("img-fluid","w-100")
    //     imagen.src=cancion.album.images[1].url

    //     let popularidad=document.createElement("p")
    //     popularidad.classList.add("text-center", "mt-3")
    //     popularidad.textContent=cancion.popularity


    //     //padres e hijos
        
    //     tarjeta.appendChild(imagen)
    //     tarjeta.appendChild(audio)
    //     tarjeta.appendChild(nombre)
    //     tarjeta.appendChild(popularidad)
    //     columna.appendChild(tarjeta)
    //     fila.appendChild(columna)

    //     console.log(cancion.name)
    //     console.log(cancion.preview_url)
    //     console.log(cancion.popularity)
    //     console.log(cancion.album.images[0].url)
        

    
    // })
})


.catch(function(error){
    console.log(error)
})

