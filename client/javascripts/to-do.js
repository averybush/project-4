//jshint esversion: 6

let controller = function(){

  if (localStorage.getItem("commentsList")) {
    $(".comments").html(localStorage.getItem("commentsList"));
  }

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      //$new_comment.fadeIn();
      $(".comment-input input").val("");

      //log list of paragraph elements
      localStorage.setItem("commentsList", $(".comments").html());
      console.console.log(localStorage.getItem("commentsList"));
    }
  };

  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

let deleteHandler = () => {
  console.log("dH");
  localStorage.removeItem("commentsList");
  window.location.reload();
};

$(document).ready(() => {
  //select delete button
  let buttonElem = document.querySelectorAll('button')[0];
  buttonElem.addEventListener('click', deleteHandler);
  controller();
});
