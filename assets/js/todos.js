

//To add a new entry to the Todo
  
$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		var todoText = $(this).val();
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});

// On Method will perform the function on the newer li's as well but the Event Listener must be on that element 
// which is present when the page loads and as all the li's are not present at that time , we have to choose ul 
// for that work.

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	// It will prevent the further calling of this method on it's parent elements.
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});