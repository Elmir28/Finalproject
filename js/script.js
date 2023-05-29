new WOW().init();


function Up(){
    document.getElementById('dd').style.top ="0"
    document.getElementById('dd').style.transition= "0.5s"
}


function Down(){
    document.getElementById('dd').style.top ="480px"
    document.getElementById('dd').style.transition= "0.5s"
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
