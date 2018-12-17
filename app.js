var main = function() {
	"use strict"

function addComment() {
	var $new_comment;

			 if($(".input").val() !== "") {

			 	$new_comment = $("<p>").text($(".input").val());
			 	$new_comment.hide();
				$(".comments").append($new_comment);
				$new_comment.fadeIn();
				$(".input").val("");

			}		
};

	$(".input-button").on("click", function(event){
			
			addComment();
			
	});

	
	$(".input").on("keypress", function(event){
			
			if(event.keyCode == 13){
			 
			 addComment();	

		}
		
	});

};



$(document).ready(main);
