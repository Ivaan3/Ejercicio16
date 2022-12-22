const secciones = document.querySelectorAll(".seccion")
const parrafos = document.querySelectorAll(".parrafo")
const borrar = document.querySelectorAll(".delete")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Comienzo a mover el " + parrafo.id)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elem_oculto = document.querySelector(".oculto")
        event.dataTransfer.setDragImage(elem_oculto, 0, 0)
    })
    parrafo.addEventListener("dragend", () => {
        //console.log("termino de mover")
        parrafo.classList.remove("dragging")
    })

})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
    })
    seccion.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("Id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })

})

borrar.forEach(delet => {
    delet.addEventListener("dragover", event => {
        event.preventDefault()

    })
    delet.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("Id")
        const parrafo = document.getElementById(id_parrafo)
        delet.appendChild(parrafo)
        console.log("Parrafo removido")
    })
})