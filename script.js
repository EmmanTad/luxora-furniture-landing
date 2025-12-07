function toggleMenu(){
  const nav=document.getElementById('nav');
  nav.style.display=nav.style.display==='flex'?'none':'flex';
}
function scrollCarousel(dir){
  document.getElementById('carousel').scrollBy({left:dir*320,behavior:'smooth'});
}
setInterval(()=>scrollCarousel(1),4000);