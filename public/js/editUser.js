window.addEventListener("load", (e) => {
    let form = document.querySelector(".showEdit");
    let info = document.querySelector(".informacion");
    let editButton = document.querySelector(".edicionUsuario")
    editButton.addEventListener("click", (resultado) => {
        // console.log('clickeaste editar')

        form.style.display = "block";
        info.style.display = "none";
    })
    let cancelacion = document.querySelector(".cancelar");

    cancelacion.addEventListener("click", (e) => {
        // console.log('clickeaste cancelar')
        form.style.display = "none";
        info.style.display = "flex";

    })




})