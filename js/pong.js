var x = [];

//UI
function pingGame(namba){
  for( var index = 1; index <= namba; index+=1);{
    if(index % 15 === 0){
      x.push("pingpong");
    }
    else if (index % 5 === 0) {
      x.push("pong");
    }
    else if (index % 3 === 0) {
      x.push("ping");
    }
    else {
      x.push("index");
    }
  }
}
//BS
$(document).ready(function(){
   $("form#ping-pong").submit(function(){
      event.preventDefault();
      var namba = parseInt($("input#namba").val());

      pingGame(namba);

      x.forEach(function(namba){
         $("#output").append('<li>' + namba + "</li>");
      });
   });
})
