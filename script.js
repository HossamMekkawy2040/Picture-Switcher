const slider = document.getElementById("slider");

function getRandomImage() {
  // يجلب صورة عشوائية جديدة من Unsplash
  return `https://source.unsplash.com/random/800x600?sig=${Math.random()}`;
}

// أول صورة عند تحميل الصفحة
slider.src = getRandomImage();

// تبديل تلقائي كل 3 ثواني
setInterval(() => {
  slider.src = getRandomImage();
}, 3000);

