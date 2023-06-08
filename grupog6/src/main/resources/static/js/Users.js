const URL_LOGIN = "http://127.0.0.1:8080/api/user/";

function validateUser() {
    let user = {
        email: $("#email").val(),
        password: $("#password").val()
    };

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
      alert("No existe usuario");
    },
    complete: function (xhr, status) {
      //   alert("Petición realizada");
    },
  });
}

function validateEmail() {
  let user = {
      email: $("#email").val(),
  };

$.ajax({
  url: URL_LOGIN + user.email,
  type: "GET",
  dataType: "json",
  success: function (response) {
    if(!response){createUser();}
    else{alert("Correo ya existe");}
  },
  error: function (xhr, status) {
    alert("No existe usuario");
  },
  complete: function (xhr, status) {
    //   alert("Petición realizada");
  },
});
}



function createUser() {
  let user = {
    name: $("#name").val(),
    email: $("#email").val(),
    password: $("#password").val()
  };

  $.ajax({
  url: URL_LOGIN +"new",
  type: "POST",
  dataType: "json",
  contentType:"application/json;",
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
}

