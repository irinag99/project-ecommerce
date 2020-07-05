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
    let overlay = document.getElementById('overlay')

    addAddressButton.addEventListener('click', (e)=>{
 
        addAddressForm.style.display='block'


        // addAddressButton.style.display = 'none';

        overlay.style.display='block'

        cancelForm.addEventListener('click',e=>{
            addAddressForm.style.display = 'none'

            // addAddressButton.style.display = 'block';

            overlay.style.display = 'none'

        })
        overlay.addEventListener('click', e => {
            addAddressForm.style.display = 'none'


            // addAddressButton.style.display = 'block';

            overlay.style.display = 'none'

        })


    })





})
