const URI="https://swapi.dev/api/people"

const PETICION={
    method:"GET",

}

//coger taxi-fecth
fetch(URI,PETICION)

//promesa
.then(function(respuesta){
    return  respuesta.json()
})

.then(function(respuesta){

    console.log(respuesta)
    console.log(respuesta.results)

    let tabla=document.getElementById("cuerpotabla")

    respuesta.results.forEach(function(personaje){

        let filaTabla=document.createElement("tr")
        
        let celdaName=document.createElement("td")
        celdaName.textContent=personaje.name

        let celdaHair=document.createElement("td")
        celdaHair.textContent=personaje.hair_color

        let celdaSkin=document.createElement("td")
        celdaSkin.textContent=personaje.skin_color

        let celdaGenero=document.createElement("td")
        celdaGenero.textContent=personaje.gender

        


        //padres e hijos

        filaTabla.appendChild(celdaName)
        filaTabla.appendChild(celdaHair)
        filaTabla.appendChild(celdaSkin)
        filaTabla.appendChild(celdaGenero)
        tabla.appendChild(filaTabla)
        

    
    })
})


.catch(function(error){
    console.log(error)
})