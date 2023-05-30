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


window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").classList.add("show");
  } else {
    document.getElementById("back-to-top").classList.remove("show");
  }
});

// Плавная прокрутка наверх при нажатии на ссылку
document.getElementById("back-to-top").addEventListener("click", function(event) {
  event.preventDefault();
  const scrollStep = Math.PI / (500 / 15);
  const cosParameter = (document.documentElement.scrollTop || document.body.scrollTop) / 2;
  let scrollCount = 0;
  let scrollMargin;

  function scrollToTop() {
    const scrollTop = (document.documentElement.scrollTop || document.body.scrollTop);
    if (scrollTop !== 0) {
      scrollCount++;
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
      window.scrollTo({
        top: scrollTop - scrollMargin,
        behavior: "smooth" // Применяем плавный эффект
      });
      requestAnimationFrame(scrollToTop);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Применяем плавный эффект
      });
    }
  }

  requestAnimationFrame(scrollToTop);
});
