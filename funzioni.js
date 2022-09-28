//FUNZIONI LOGIN
$(document).ready(function () {
  if (localStorage.getItem("inputvalue")) {
    $("#nomescelto").text(localStorage.getItem("inputvalue"));
  }

  $("#login-form-submit").on("click", function () {
    localStorage.setItem("inputvalue", $("#username-field").val());
    $("#nomescelto").text(localStorage.getItem("inputvalue"));
  });

  $("#pulisci").on("click", function () {
    localStorage.removeItem("inputvalue");
  });

  $("#puliscitutto").on("click", function () {
    localStorage.clear();
  });

});
