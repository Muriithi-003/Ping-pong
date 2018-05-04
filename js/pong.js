//back-end logic
function pingPong(i){
	//takes in an interger and integer as an argument and returns the below logical states
	if (i%15===0){
		return "pingpong"
		}
	else if(i%3===0){
		return "ping"
		}
	else if(i%5===0){
		return "pong"
		}
	else{
		return i
		}
}

//user interface
$(document).ready(function(){
	$("form#ping-pong").submit(function(event){
		event.preventDefault();
		var num=parseInt($("input#number").val());
		for(var i=1; i<=num; i+=1){
			$("output").append("<li>"+pingPong(i)+"</li>");
		}
	});
});
