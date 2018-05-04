//BS logic
function pingPong(number){
  var x=[];
	//takes in an interger and integer as an argument and returns the below logical states

  for(var i=1; i<=number; i+=1){
    if (i%15==0){
  		x.push("pingpong");
  		}
  	else if(i%3==0){
  		 x.push("ping");
  		}
  	else if(i%5==0){
  		x.push ("pong");
  		}
  	else{
  		x.push(i);

  		}
  }
  return x;
}
//user interface
$(document).ready(function(){
	$("form#ping-pong").submit(function(event){
    $("#output").empty();
		var number=parseInt($("input#number").val());
    var x= pingPong(number);
    x.forEach(function(myOutput){
			$("#output").append("<li>"+ myOutput +"</li>");
      event.preventDefault();
    });
  });
});
