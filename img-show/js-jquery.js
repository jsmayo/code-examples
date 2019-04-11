$(document).ready(function(){
    setTimeout(function(){
              $("#pop-out").show();     
       },2000);
    
    $("button.ok").click(function(){
        $("#pop-out").hide();
    });
});