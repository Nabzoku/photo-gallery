const imageArray = Array.from(document.querySelectorAll('.img'));
const focusedImage = document.querySelector('.focused-img');
const overlay = document.querySelector('.overlay');
const arrowButtons = document.querySelectorAll('.arrow-btn');
let currentImage;
imageArray.forEach((img) =>
  img.addEventListener('click', function () {
    focusedImage.src = img.src;
    currentImage = imageArray.indexOf(img);
    overlay.classList.toggle('hidden');
  })
);
overlay.addEventListener('click', function (e) {
  if (e.target.tagName !== 'A') overlay.classList.toggle('hidden');
});

arrowButtons.forEach((btn) =>
  btn.addEventListener('click', function () {
    btn.classList.contains('previous') ? currentImage-- : currentImage++;
    if (currentImage < 0 || currentImage > 8) overlay.classList.add('hidden');
    else focusedImage.src = imageArray[currentImage].src;
  })
);
