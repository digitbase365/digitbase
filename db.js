// Nav Menu Script
    var marker = document.querySelector('.marker');
    var item = document.querySelectorAll('nav a');


   function indicator(e){
     marker.style.left = e.offsetLeft+"px";
     marker.style.width = e.offsetWidth+"px";
   } 

   item.forEach(link => {
     link.addEventListener('mouseover', (e)=>{
       indicator(e.target);
     })
   })
// End of Nav Menu Script


// Morphing Burger Icon{}
   let menu = document.querySelector('.menu')
   let burger = document.querySelector('.burger')

   menu.addEventListener('click', ()=>{
       menu.classList.toggle('swish')
       burger.classList.toggle('swish')
   })


// End of Morphing Burger Icon{}
