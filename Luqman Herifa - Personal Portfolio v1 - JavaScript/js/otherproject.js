const otherProjectHidden = document.getElementsByClassName('other-project-hidden');
var triggerHidden = document.getElementById("triggerHidden");
var btnShow = document.getElementById("btnShow");

  btnShow.addEventListener("click", functionShow);

  function functionShow() {
    if (triggerHidden.style.display === "none") {
      triggerHidden.style.display = "inline";
      btnShow.innerHTML = "Show More";
      for(var i = 0; i < otherProjectHidden.length; i++) {
        otherProjectHidden[i].style.display = "none";
      }
    } else {
      triggerHidden.style.display = "none";
      btnShow.innerHTML = "Show Less";
      for(var i = 0; i < otherProjectHidden.length; i++) {
        otherProjectHidden[i].style.display = "inline";
      }
    }
  }