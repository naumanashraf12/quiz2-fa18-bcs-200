$(function () {
    $("#myForm").submit(function(){
      if($("#name").val().length < 5)
    {
      $("#name").addClass("error");
      $("#name-valid").html("please enter atleast 5 alphabet name");  
    return false;
    }

    if($("#passward").val().length < 8)
    {
      $("#passward").addClass("error");
      $("#passward-valid").html("please enter atleast 8 passward");  
    return false;
    }
    if($("#confirm_passward").val() !== $("#passward").val() )
    {
      $("#confirm_passward").addClass("error");
      $("#passward-match").html("please enter same passward");
    return false;
    }
    });
  });
  