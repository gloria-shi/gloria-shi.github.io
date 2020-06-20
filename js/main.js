
var overlay = document.getElementById('navbar');
var openMenu = document.getElementById('open-menu');
var closeMenu = document.getElementById('close-menu')
var body = document.getElementById('body')
/*menu animation*/
openMenu.addEventListener('click',function(){
  overlay.classList.remove('show-menu');
  overlay.classList.remove('remove-menu');
  void openMenu.offsetWidth;
  overlay.classList.add('show-menu');
  body.classList.add('fixed-page');
});
closeMenu.addEventListener('click',function(){
  overlay.classList.add('remove-menu');
  body.classList.remove('fixed-page');
});
