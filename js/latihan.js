const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20; // Lebar kartu ditambah margin
  cardsContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % cards.length; // Menghitung index berikutnya
  updateSlider();
}

// Mengatur interval otomatis untuk berpindah slide setiap 3 detik
setInterval(nextSlide, 3000);