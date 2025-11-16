// Interactividad ligera para filtros y menú
document.addEventListener('DOMContentLoaded', function(){
  // filtros de galería
  document.querySelectorAll('.chip').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      const items = document.querySelectorAll('.product-item');
      items.forEach(item=>{
        if(cat==='all' || item.dataset.cat===cat) item.style.display = '';
        else item.style.display = 'none';
      });
      window.scrollTo({top:0,behavior:'smooth'});
    });
  });

  // menú para móvil (simple)
  const menuBtn = document.querySelector('.menu-btn');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      const nav = document.querySelector('.main-nav');
      if(nav.style.display==='block') nav.style.display='';
      else nav.style.display='block';
    });
  }
});
