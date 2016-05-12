$(document).ready(function(){

    $(function(){
      $("#main_info").load("../main_info.html"); 
    });
    
    $(function(){
      $("#sensor").load("../sensor.html"); 
    });
    
    $(function(){
      $("#processing").load("../processing.html"); 
    });
    
    $(function(){
      $("#communication").load("../communication.html"); 
    });
    
    $(function(){
      $("#userInterface").load("../userInterface.html"); 
    });
    
    $(function(){
      $("#storage").load("../storage.html"); 
    });
    
    $(function(){
      $("#voltage").load("../voltage.html"); 
    });
    
    $(function(){
      $("#physical").load("../physical.html"); 
    });
    
    $(function(){
      $("#reviewandapprove").load("../reviewandapprove.html"); 
    });
    
    
    $("#example-vertical").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical"
    });
    
    

    

    
});




