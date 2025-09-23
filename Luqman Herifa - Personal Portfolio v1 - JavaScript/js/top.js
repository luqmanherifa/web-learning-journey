let btnTop = document.getElementById("btnTop");

window.onscroll = function() {functionScroll()};

btnTop.addEventListener("click", functionTop);

function functionScroll() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

function functionTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}