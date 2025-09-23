var icon_dark = document.getElementById("icon-dark");

  icon_dark.onclick = function() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
      icon_dark.className = "fa-solid fa-sun fa-xl";
    } else {
      icon_dark.className = "fa-solid fa-moon fa-xl";
    }
  }