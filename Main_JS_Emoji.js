console.log("Stuff!"); //outputs text to console.

let l_button = document.querySelector(".leftpupil");
const left_Eye = document.querySelector('.lefteye');

l_button.addEventListener("mousedown", function() {  //adds an event (a click,mousedown,etc.) to a variable
    makeEyeRed(left_Eye);
});
l_button.addEventListener("mouseup", function(){ //same as the other... 
    redEye_mouseUp(left_Eye)
});


let r_button = document.querySelector(".rightpupil");
const right_Eye = document.querySelector('.righteye');

r_button.addEventListener("mousedown", function() {  //adds an event (a click,mousedown,etc.) to a variable
    makeEyeRed(right_Eye);
});
r_button.addEventListener("mouseup", function(){ //same as the other... 
    redEye_mouseUp(right_Eye)
});

// let l_toggle = false;





