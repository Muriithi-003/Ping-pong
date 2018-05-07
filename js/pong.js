//BS logic
function pingPong(number){
  var myOutput=[]; // an array to store the output
  //takes in an interger and integer as an argument and returns the below logical states

  for(var myInput=1; myInput<=number; myInput+=1){ //the input the user enters
    if (myInput%15==0){
      myOutput.push("pingpong");
    }
    else if(myInput%3==0){
      myOutput.push("ping");
    }
    else if(myInput%5==0){
      myOutput.push ("pong");
    }
    else{
      myOutput.push(myInput);

    }
  }
  return myOutput;// the output
}
//user interface
$(document).ready(function(){
  $("form#ping-pong").submit(function(event){
    $("#output").empty();
    var number=parseInt($("input#number").val());
    var myOutput= pingPong(number);
    myOutput.forEach(function(myOutput){
      $("#output").append("<li>"+ myOutput +"</li>");
      event.preventDefault();
    });
  });
});
