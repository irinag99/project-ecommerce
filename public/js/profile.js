window.addEventListener("load", (e) => {

    //EDIT USER
    let form = document.querySelector(".showEdit");
    let info = document.querySelector(".informacion");
    let editButton = document.querySelector(".edicionUsuario")
    editButton.addEventListener("click", (resultado) => {
        console.log('clickeaste editar')

        form.style.display = "block";
        info.style.display = "none";
    })
    let cancelacion = document.querySelector(".cancelar");

    cancelacion.addEventListener("click", (e) => {
        // console.log('clickeaste cancelar')
        form.style.display = "none";
        info.style.display = "flex";

    })
    
    //ADDRESSES
    let addAddressForm = document.querySelector('.address-form');
    let addAddressButton=document.querySelector('.add-address-button');
    let cancelForm = document.querySelector('.cancel-address-form');
    let overlay = document.getElementById('overlay');
    let inputs = document.querySelectorAll('form#addAddress input');
    let textarea = document.querySelector('form#addAddress textarea')
    let check;
    addAddressButton.addEventListener('click', (e)=>{
 
        addAddressForm.style.display='block'
        overlay.style.display='block'

        // inputs.forEach(input=>{
        //     input.addEventListener('focusout',e=>{
        //         if (input.value.length > 0){
        //             check = document.getElementById(input.name)
        //             check.style.display = 'inline'
        //         }
        //     })
        // })

        cancelForm.addEventListener('click',e=>{
            addAddressForm.style.display = 'none'
            overlay.style.display = 'none'
            inputs.forEach(input=>{
                input.value =''
            })
            textarea.value =''

        })
        overlay.addEventListener('click', e => {
            addAddressForm.style.display = 'none'
            inputs.forEach(input => {
                input.value = ''
            })
            textarea.value = ''

            overlay.style.display = 'none'

        })


    })





})
