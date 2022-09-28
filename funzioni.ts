
$(document).ready(function () {
    if (localStorage.getItem("inputvalue")) {
      let localContent: string= localStorage.getItem("inputvalue")
      $("#nomescelto").text(localContent);

    }
  
    $("#login-form-submit").on("click", function () {
      let localUsername: string= $("#username-field").val()[0]
      localStorage.setItem("inputvalue", localUsername);
      $("#nomescelto").text(localStorage.getItem("inputvalue"));
    });
  
    $("#pulisci").on("click", function () {
      localStorage.removeItem("inputvalue");
    });
  
    $("#puliscitutto").on("click", function () {
      localStorage.clear();
    });
  
});
  