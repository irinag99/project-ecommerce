window.addEventListener("load",function(){
    let uno = document.querySelector("button.uno")
    let dos = document.querySelector("button.dos")
    let primeraTanda = document.querySelector("div.primera-tanda")
    let segundaTanda = document.querySelector("div.segunda-tanda")

    dos.addEventListener("click",function(){
        window.scrollTo( 0, 100)
        primeraTanda.style.display = "none";
        segundaTanda.style.display = "flex";
    }),
    uno.addEventListener("click",function(){
        window.scrollTo( 0, 100)
        primeraTanda.style.display = "flex";
        segundaTanda.style.display = "none";
    }
    
    )

})