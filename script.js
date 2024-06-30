const urunler = document.querySelectorAll('.urun');
const fiyatFiltresi = document.getElementById('fiyat-filtresi');

fiyatFiltresi.addEventListener('change', function() {
  const secilenFiyat = this.value;

  urunler.forEach(function(urun) {
    const urunFiyati = parseInt(urun.querySelector('.urun-fiyati').textContent);

    if (secilenFiyat === '' || urunFiyati <= secilenFiyat) {
      urun.style.display = 'block';
    } else {
      urun.style.display = 'none';
    }
  });
});
