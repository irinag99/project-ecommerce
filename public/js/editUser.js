window.addEventListener("load", (e)=>{

 
let editButton = document.querySelector(".edicionUsuario")
editButton.addEventListener("click",(resultado)=>{
    let form = document.querySelector(".showEdit");
    form.style.display = "block";
    let info= document.querySelector(".informacion");
    info.style.display = "none";
})
let cancelacion = document.querySelector(".cancelar");
cancelacion.addEventListener("click", (e)=>{
    let form = document.querySelector(".showEdit");
    form.style.display = "none";
    let info = document.querySelector(".informacion");
    info.style.display = "block";
    
})




})