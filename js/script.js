new WOW().init();


function Up(){
    document.getElementById('dd').style.top ="0"
    document.getElementById('dd').style.transition= "0.5s"
}


function Down(){
    document.getElementById('dd').style.top ="480px"
    document.getElementById('dd').style.transition= "0.5s"
}

function Up1(){
    document.getElementById('dd1').style.top ="0"
    document.getElementById('dd1').style.transition= "0.5s"
}


function Down1(){
    document.getElementById('dd1').style.top ="480px"
    document.getElementById('dd1').style.transition= "0.5s"
}

function Up2(){
    document.getElementById('dd2').style.top ="0"
    document.getElementById('dd2').style.transition= "0.5s"
}


function Down2(){
    document.getElementById('dd2').style.top ="480px"
    document.getElementById('dd2').style.transition= "0.5s"
}

function Up3(){
    document.getElementById('dd3').style.top ="0"
    document.getElementById('dd3').style.transition= "0.5s"
}


function Down3(){
    document.getElementById('dd3').style.top ="480px"
    document.getElementById('dd3').style.transition= "0.5s"
}

function Up4(){
    document.getElementById('dd4').style.top ="0"
    document.getElementById('dd4').style.transition= "0.5s"
}


function Down4(){
    document.getElementById('dd4').style.top ="480px"
    document.getElementById('dd4').style.transition= "0.5s"
}

function Up5(){
    document.getElementById('dd5').style.top ="0"
    document.getElementById('dd5').style.transition= "0.5s"
}


function Down5(){
    document.getElementById('dd5').style.top ="480px"
    document.getElementById('dd5').style.transition= "0.5s"
}



function openMenu(){
    document.getElementsByClassName("menu-container")[0].style.left = "0"
    document.getElementsByClassName("menu-container")[0].style.transition = "0.7s"
    document.getElementById("burger_menu").innerHTML = '<i class="bi bi-x-lg"></i>'
    document.getElementById("x").style.zIndex = "10"
    document.getElementById("burger_menu").style = 'position: fixed; right: 3%'
}

function closeMenu(){
    document.getElementsByClassName("menu-container")[0].style.left = "-100%;";
    document.getElementsByClassName("menu-container")[0].style.transition = "0.7s";
    document.getElementById("x").innerHTML = '<i class="bi bi-list"></i>'
    document.getElementById("x").style.zIndex = "10"
}