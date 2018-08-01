var currentAmount = 0;
let e_interval = null;

function makeEyeRed(element) {
    clearInterval(e_interval);
    e_interval = setInterval(function() {
        currentAmount = Math.min(1, currentAmount + 0.1);
        element.style.fill = lerpColor('#FFFFFF', '#FF0000', currentAmount);
    }, 100);

    // left_Eye.style.fill = l_toggle ? "#FF0000" : "#FFFFFF";
    // l_toggle = !l_toggle;
};

function redEye_mouseUp(element) {
    clearInterval(e_interval);
    
    e_interval = setInterval(function() {
        currentAmount = Math.max(0, currentAmount - 0.1);
        element.style.fill = lerpColor('#FFFFFF', '#FF0000', currentAmount);
    }, 100);


};