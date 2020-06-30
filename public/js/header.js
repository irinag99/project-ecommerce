window.addEventListener("load",function(){
    let lupa = document.querySelector("a.lupa")
    let buscador = document.querySelector("input.buscador")
    lupa.addEventListener("click",function(){
        buscador.style.display = "block"
        lupa.style.display= "none"
    })
})