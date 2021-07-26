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
            tabTogglers[i].parentElement.classList.remove("text-red-600","dark:text-red-600", "opacity-100");
            tabContents.children[i].classList.remove("hidden");
            if ("#" + tabContents.children[i].id === tabName) {
                continue;
            }
            tabContents.children[i].classList.add("hidden");
        }
        e.target.parentElement.classList.add("text-red-600","dark:text-red-600", "opacity-100");
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



//custom number

function initMap() {
    var default_view = {
      lat: 43.66106,
      lng: -79.39488
    };
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: default_view
    });
    
    var university_of_waterloo = new google.maps.Marker({
      position: {
        lat: 43.4723,
        lng: -80.5449
      },
      map: map,
      title: 'University of Waterloo'
    });
    
    var university_of_toronto = new google.maps.Marker({
      position: {
        lat: 43.66106,
        lng: -79.39488
      },
      map: map,
      title: 'University of Toronto'
    });
  
    var laurier_university = new google.maps.Marker({
      position: {
        lat: 43.4724,
        lng: -80.5263
      },
      map: map,
      title: 'Laurier University'
    });
    
    var university_of_guelph = new google.maps.Marker({
      position: {
        lat: 43.5309,
        lng: -80.2285
      },
      map: map,
      title: 'University of Guelph'
    });
    
    var mcmaster_university = new google.maps.Marker({
      position: {
        lat: 43.2609,
        lng: -79.9192
      },
      map: map,
      title: 'McMaster University'
    });
    
    var carleton_university = new google.maps.Marker({
      position: {
        lat: 45.3876,
        lng: -75.6960
      },
      map: map,
      title: 'Carleton University'
    });
    
    var university_of_ottawa = new google.maps.Marker({
      position: {
        lat: 45.4231,
        lng: -75.6831
      },
      map: map,
      title: 'University of Ottawa'
    });
    
    var york_university = new google.maps.Marker({
      position: {
        lat: 43.7735,
        lng: -79.5019
      },
      map: map,
      title: 'York University'
    });
    
    var carleton_university = new google.maps.Marker({
      position: {
        lat: 45.5048,
        lng: -73.5772
      },
      map: map,
      title: 'McGill University'
    });
    
    var university_of_houston = new google.maps.Marker({
      position: {
        lat: 29.7199,
        lng: -95.3422
      },
      map: map,
      title: 'University of Houston'
    });
    
    var university_of_western_ontario = new google.maps.Marker({
      position: {
        lat: 43.0096,
        lng: -81.2737
      },
      map: map,
      title: 'University of Western Ontario'
    });
    
    var ryerson_university = new google.maps.Marker({
      position: {
        lat: 43.6577,
        lng: -79.3788
      },
      map: map,
      title: 'Ryerson University'
    });
    
    var queens_university = new google.maps.Marker({
      position: {
        lat: 44.2253,
        lng: -76.4951
      },
      map: map,
      title: 'Queen\'s University'
    });
    
    var brock_university = new google.maps.Marker({
      position: {
        lat: 43.1176,
        lng: -79.2477
      },
      map: map,
      title: 'Brock University'
    });
    
    var trent_university = new google.maps.Marker({
      position: {
        lat: 44.3569,
        lng: -78.2902
      },
      map: map,
      title: 'Trent University'
    });
    
    var university_of_windsor = new google.maps.Marker({
      position: {
        lat: 42.3077,
        lng: -83.0685
      },
      map: map,
      title: 'University of Windsor'
    });
    
    var tahoe = new google.maps.Marker({
      position: {
        lat: 39.0968,
        lng: -120.0324
      },
      map: map,
      title: 'Where my boys are at'
    });
  }