var main = function() {
	"use strict"

	$(".input-button").on("click", function(event){
			var $new_comment;

			 if($(".input").val() !== "") {

			 	$new_comment = $("<p>").text($(".input").val());
			 	$new_comment.hide();
				$(".comments").append($new_comment);
				$new_comment.fadeIn();
				$(".input").val("");

			}
	});

$(".input").on("keypress", function(event){
			var $new_comment;


			if(event.keyCode == 13){

			 if($(".input").val() !== "") {

			 	$new_comment = $("<p>").text($(".input").val());
			 	$new_comment.hide();
				$(".comments").append($new_comment);
				$new_comment.fadeIn();
				$(".input").val("");

			}

		}
		
	});


};



$(document).ready(main);
