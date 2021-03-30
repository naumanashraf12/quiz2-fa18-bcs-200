$(function () {
  $("#nameValid").hide();
  $("#passwardValid").hide();
  $("#passwardMatch").hide();

  var error_fname = false;
  var error_password = false;
  var error_retype_password = false;

  $("#name").focusout(function () {
    check_fname();
  });
  $("#password").focusout(function () {
    check_password();
  });
  $("#confirmPassword").focusout(function () {
    check_retype_password();
  });

  function check_fname() {
    var pattern = /^[a-zA-Z]*$/;
    var fname = $("#name").val();
    if (pattern.test(fname) && fname !== "" && fname.length > 5) {
      $("#nameValid").hide();
      $("#name").css("border-bottom", "2px solid #34F458");
    } else {
      $("#nameValid").html("Should contain more than 5 Characters");
      $("#nameValid").show();
      $("#name").css("border-bottom", "2px solid #F90A0A");
      error_fname = true;
    }
  }

  function check_password() {
    var password_length = $("#password").val().length;
    if (password_length < 8) {
      $("#passwardValid").html("Atleast 8 Characters");
      $("#passwardValid").show();
      $("#password").css("border-bottom", "2px solid #F90A0A");
      error_password = true;
    } else {
      $("#passwardValid").hide();
      $("#password").css("border-bottom", "2px solid #34F458");
    }
  }

  function check_retype_password() {
    var password = $("#password").val();
    var retype_password = $("#confirmPassword").val();
    if (password !== retype_password) {
      $("#passwardMatch").html("Passwords Did not Matched");
      $("#passwardMatch").show();
      $("#confirmPassword").css("border-bottom", "2px solid #F90A0A");
      error_retype_password = true;
    } else {
      $("#passwardMatch").hide();
      $("#confirmPassword").css("border-bottom", "2px solid #34F458");
    }
  }

  $("#myForm").submit(function () {
    error_fname = false;
    error_password = false;
    error_retype_password = false;

    check_fname();
    check_password();
    check_retype_password();

    if (
      error_fname === false &&
      error_password === false &&
      error_retype_password === false
    ) {
      alert("Registration Successfull");
      return true;
    } else {
      alert("Please Fill the form Correctly");
      return false;
    }
  });
});
