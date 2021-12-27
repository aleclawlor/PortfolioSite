// hide navbar on scrolldown and make it reappear on scrollup
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    // document.getElementById("homeNavbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    // document.getElementById("homeNavbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  
}
