const slider = document.getElementById(slider);

function getRandomImage() {
  const randomNum = Math.floor(Math.random() * 1000); // رقم عشوائي
  return `https://source.unsplash.com/800x600/?nature&sig=${rand}`;
}

// حمّل أول صورة
slider.src = getRandomImage();

// بدّل كل 3 ثواني
setInterval(() => {
  slider.src = getRandomImage();
}, 3000);

