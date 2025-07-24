const images = [];

for (let i = 1; i <= 20; i++) {
  images.push(`images/img${i}.jpg`);
}

let current = 0;
const slider = document.getElementById("slider");

function showNextImage() {
  current = (current + 1) % images.length;
  slider.src = images[current];
}

// أول صورة
slider.src = images[current];

// التبديل التلقائي كل 3 ثواني
setInterval(showNextImage, 3000);


