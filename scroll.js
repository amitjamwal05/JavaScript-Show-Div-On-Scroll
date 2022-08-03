myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 100) {
        myID.className = "bottomMenu show2"
    } else {
        myID.className = "bottomMenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);