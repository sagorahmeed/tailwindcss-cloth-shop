// dark  module

const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");
const toggleDarkMode = function () {
    checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};
toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);
// dark mode

// active css
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("active_btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// active css

//sticky nav
window.onscroll = function () {
    myFunction();
};

var navbarcon = document.getElementById("content");
var sticky = navbarcon.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbarcon.classList.add("sticky");
    } else {
        navbarcon;
        navbarcon.classList.remove("sticky");
    }
}
//sticky nav

// slider
var cont = 0;
function loopSlider() {
    var xx = setInterval(function () {
        switch (cont) {
            case 0: {
                $("#slider-1").fadeOut(400);
                $("#slider-2").delay(400).fadeIn(400);
                cont = 1;

                break;
            }
            case 1: {
                $("#slider-2").fadeOut(400);
                $("#slider-1").delay(400).fadeIn(400);

                cont = 0;

                break;
            }
        }
    }, 8000);
}

function reinitLoop(time) {
    clearInterval(xx);
    setTimeout(loopSlider(), time);
}

function sliderButton1() {
    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    reinitLoop(4000);
    cont = 0;
}

function sliderButton2() {
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    reinitLoop(4000);
    cont = 1;
}

$(window).ready(function () {
    $("#slider-2").hide();

    loopSlider();
});

// slider

// tabs
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("a");
console.log(tabTogglers);

tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {
            tabTogglers[i].parentElement.classList.remove("border-red-400","text-red-600","dark:text-red-600", "opacity-100");
            tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
                continue;
            }
            tabContents.children[i].classList.add("hidden");
        }
        e.target.parentElement.classList.add("border-red-400","text-red-600","dark:text-red-600", "opacity-100");
    });
});

document.getElementById("default-tab").click();
//tab

//search


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_dot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active_dot";
}



$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
