
 const imagen = document.querySelector("#miImagen");

 
 imagen.addEventListener("click", function () {
     
     if (imagen.classList.contains("borde-rojo")) {
        
         imagen.classList.remove("borde-rojo");
     } else {
         
         imagen.classList.add("borde-rojo");
     }
 });