new TypeIt("#simpleUsage", {
  strings: "Johnny Miguel Sebastian Roque Neciosup",
  speed: 50,
  waitUntilVisible: true,
}).go();

var dropbutton = document.querySelector(".dropbutton");
var opciones = document.querySelector(".opciones");
var options = document.getElementById("opciones");
var navbar = document.getElementById("navbar");
var option = document.getElementsByClassName("opcion");
var windowWidth = window.innerWidth;
var cerrado = true;
/**detectar click de dropbutton */

function handler() {
  if (cerrado) {
    options.setAttribute(
      "style",
      `display: flex !important;
  position: fixed;
  z-index: 10;
  top: 5rem;
  background-color: #000000ed;
  flex-direction: column;
  width: 100vw;
  left: 0px;
  justify-content: start;
  align-items: center;
  height: 100vh;`
    );

    for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("style", "margin-bottom:2rem;");
    }
    cerrado = !cerrado;
  } else {
    for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("style", "margin-bottom:0px;");
    }
    options.setAttribute("style", "display:none !important;");
    cerrado = !cerrado;
  }
}

dropbutton.addEventListener("click", handler);
$(window).resize(function () {
  if ($(this).width() > 450) {
    $(".opciones").css({ display: "flex" });
  }
});

$("li").click(function(){
  if($(window).width() <=450){
    for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("style", "margin-bottom:0px;");
    }
    options.setAttribute("style", "display:none !important;");
    cerrado = !cerrado;
  }
})
