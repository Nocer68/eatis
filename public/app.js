window.onscroll = function () {

  if (document.documentElement.scrollTop > 490) {
    document.getElementById("navbar").style.background = "white";
    document.getElementById("navbar").style.padding = "30px 50px";
    document.getElementById("logo").style.color = "white";
    document.getElementById("navbar-right").style.color = "black";

  }
  else {
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.color = "black";
    document.getElementById("navbar-right").style.color = "black";
  }


}

