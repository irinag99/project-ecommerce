window.addEventListener("load",()=>{
    let showEdit = document.querySelector(".showEdit");
    let destroy = document.querySelector(".delete form");
    let form = document.querySelector(".edit");

    let related = document.querySelector(".related");
    let nameProduct = document.querySelector(".nameProduct");
    let imageProduct = document.querySelector(".imageProduct");
 

    showEdit.addEventListener("click",()=>{
      form.style.display ="block";
      related.style.display = "none";
      imageProduct.style.display ="none";
      nameProduct.style.display="none";
    })
     destroy.addEventListener("submit",(e)=>{
     
            e.preventDefault();
            let seguro = confirm("Estas seguro de querer eliminarlo?");
            if(seguro){
               destroy.submit();
            }
    }) 






})