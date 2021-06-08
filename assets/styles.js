// active css
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// active css

//sticky nav
    window.onscroll = function() {myFunction()};
                
    var navbarcon = document.getElementById("content");
    var sticky = navbarcon.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbarcon.classList.add("sticky")
        } else {navbarcon
            navbarcon.classList.remove("sticky");
        }
    }
//sticky nav