// const URL_LOGIN = "http://localhost:8080/api/user/";
const URL_LOGIN = "http://143.47.105.106:8080/api/user/";

function validateUser() {
    let user = {
        email: $("#email").val(),
        password: $("#password").val()
    };

  try {
    $.ajax({
      url: URL_LOGIN + user.email + "/" + user.password,
      type: "GET",
      dataType: "json",
      success: function (response) {
        if(response.name === "NO DEFINIDO"){alert("Datos incorrectos");}
        else{
          alert("Bienvenido: " + response.name);
          location.href = "mainMenu.html";
        }
          
      },
      error: function (xhr, status) {
        alert("No existe un usuario");
      },
      complete: function (xhr, status) {
        //   alert("Petición realizada");
      },
    });
  } catch (error) {
    alert(error);
  }
}

function validateEmail() {
  let user = {
      email: $("#emailRegister").val(),
  };

$.ajax({
  url: URL_LOGIN + user.email,
  type: "GET",
  dataType: "json",
  success: function (response) {
    if(response){
      //alert("Correo ya existe");
      $('#emailRegister').focus();
      $('#emailRegister').select();
      $('.invalid-feedback').show();
    } else{
      $('.invalid-feedback').hide();
    }
  },
  error: function (xhr, status) {
    // alert("Error");
  },
  complete: function (xhr, status) {
    //   alert("Petición realizada");
  },
});
}


$(document).ready(function() {
  $('#emailRegister').blur(function() {
    validateEmail();
  });
});

async function createUser() {
  let user = {
    name: $("#name").val(),
    email: $("#emailRegister").val(),
    password: $("#password").val()
  };

  try {
    await $.ajax({
    url: URL_LOGIN +"new",
    type: "POST",
    contentType:"application/json",
    data:JSON.stringify(user),
    success: function (response) {
      alert("Usuario Registrado");
      location.href = "./Login.html";
    },
    error: function (xhr, status) {
      alert("No se puede registrar usuario");
    },
    complete: function (xhr, status) {
    //   alert("Petición realizada");
    },
    });
    
  } catch (error) {
    alert("Error: " + error);
  }
}