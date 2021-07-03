//Ruturns array of all saveBtn//
var saveButton = $(".saveBtn");
//Loop over every saveButton//
saveButton.each(function () {
//(This) refers to a saveButton//    
  $(this).on("click", function (event) {
//Targets parent of saveButton (time-block), gets ID      
    var timeSlot = event.target.parentNode.id;
//Targets discription / textArea//   
    var textArea = event.target.previousElementSibling;
//TextArea and  inputs need .value to get user text//    
    localStorage.setItem(timeSlot, textArea.value);
  });
});
function displayLocalStorage() {
//To get all items in localStorage loop through//    
//LocalStorage in not array, but has length property to loop through//
  for (var i = 0; i < localStorage.length; i++) {
//Get keys in order//      
    var key = localStorage.key(i);
//Use the key to get value (scheduleText)//    
    var eventText = localStorage.getItem(key);
//Find the textArea by class that represents the hour//    
    var textArea = $( "." + key)
//Use Jquery to change text of textArea//    
    textArea.val(eventText) 
  }
}
displayLocalStorage()
//Sets running clock//
window.setInterval(function () {
  $("#currentTime").html(moment().format("ddd MM/DD/YYYY H:mm:ss"));
}, 1000);

//Loops over time-block//
$(".time-block").each(function () {
//Sets variable to current hour//    
  var hour = moment().hours();
//Sets variable to the ID, changes id to a number//  
  var currentTime = parseInt($(this).attr("id"));
//Checks current hour and ID, changes class for color change//  
  if (hour > currentTime) {
    $(this).removeClass("present");
    $(this).addClass("past");
  } else if (hour === currentTime) {
    $(this).removeClass("future");
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});
