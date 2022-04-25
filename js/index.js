document.addEventListener('DOMContentLoaded', function() {
    //função da barra de navegação lateral
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

$(document).ready(function(){
    $('.parallax').parallax();
    $('.slider').slider();
  });