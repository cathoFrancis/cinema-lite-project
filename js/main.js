const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (e) => {
   if (!e.target.classList.contains('booked')) {
      e.target.classList.toggle('active');
      let totalSits = schemeSvg.querySelectorAll('.active').length;
      totalPrice = totalSits * cost;
      totalPriceTag.textContent = totalPrice;
   }

});
