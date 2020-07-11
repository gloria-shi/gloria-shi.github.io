var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

new fullpage('#sections',{
  autoScrolling: true,
  navigation: true,
  anchors: ['home','clay','island','densify'],
  navigationTooltips:['home','clay','island','densify'],
  controlArrows:false,
  slidesNavigation:true,
  animateAnchor:false,
  recordHistory:false,
  responsiveSlides:true,
})
