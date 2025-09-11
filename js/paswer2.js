const password = document.getElementById("password");
const password2  = document.getElementById("password2");
const toggle_password  = document.getElementById("toggle_password");
const toggle_password2  = document.getElementById("toggle_password2");

//logica para ver y ocultar contraseña

function visualizar(input,icon ){
 const type = input.type === "password" ? "text" : "password";
    input.type = type;
    icon.classList.toggle("fa-eye"); 
    icon.classList.toggle("fa-eye-slash"); 
}

toggle_password.addEventListener("click",()=> visualizar(password,toggle_password));
toggle_password2.addEventListener("click",()=> visualizar(password2,toggle_password2));


function validar(){
    let password = document.getElementById("password").value;
    let lowercase =/[a-z]/.test(password);
    let uppercase =/[A-Z]/.test(password);
    let number =/\d/.test(password);
    let specialchar =/[\W_]/.test(password);
    console.log(specialchar);
    if(password.length < 8){
    Swal.fire(
        "Error",
        "La contraseña debe tener almenos 8 caracteres. ",
        "error"
    );
    return
    }
    if(specialchar && lowercase && uppercase && number ){
        Swal.fire(
            "Correcto",
            "La contraseña cumple con las condiciones.",
            "success"
        );
    }
    else{
       Swal.fire({
            icon:"error",
            title: "Contraseña Invalida",
            html: 
            `<ul style="text-align:left; margin-left:20px;">
            <li>${number ? "✅" : "❌"} Al menos un numero</li>
            <li>${lowercase ? "✅" : "❌"} Al menos una minuscula</li>
            <li>${uppercase ? "✅" : "❌"} Al menos una mayuscula</li>
            <li>${specialchar ? "✅" : "❌"} Al menos un caracter especial</li>
            </ul>`
        });
    }

}