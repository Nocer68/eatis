window.onscroll = function () {

  if (document.documentElement.scrollTop > 490) {
    document.getElementById("navbar").style.background = "white";
    document.getElementById("navbar").style.padding = "30px 50px";
    document.getElementById("navbar").style.boxShadow = "0 0 5px #999999";

  }
  else {
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("navbar").style.boxShadow = "0 0 0px";
  }


}

