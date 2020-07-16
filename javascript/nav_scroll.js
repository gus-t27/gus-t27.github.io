var navcol = $(".navbar.navbar-dark");
var dark = "bg-light";
var box = "shadow";
var bannerimageheight = $('#home').height();
navcol.removeClass(box);
navcol.removeClass(dark);
$(window).scroll(function() {
  if( $(this).scrollTop() > (bannerimageheight-50)) {navcol.addClass(dark);}
  else { navcol.removeClass(dark);}
$(window).scroll(function() {
  if( $(this).scrollTop() > (bannerimageheight-50)) {navcol.addClass(box);}
  else { navcol.removeClass(box);}
});
});
