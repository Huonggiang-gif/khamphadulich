document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const heroImg = document.querySelector(".hero-img");
  const heroText = document.querySelector(".hero p");

  const originalSrc = heroImg.src;
  const originalText = heroText.textContent;

  const placeImages = document.querySelectorAll(".destinations .place img");

  placeImages.forEach(function (img) {
    img.addEventListener("mouseover", function () {
      const newSrc = img.src;
      const newText = img.dataset.description || img.alt; // dùng biến thay vì hardcode

      console.log("Thay đổi sang:", newText);

      heroImg.src = newSrc;
      heroText.textContent = newText;

    });

    img.addEventListener("mouseout", function () {
      heroImg.src = originalSrc;
      heroText.textContent = originalText;
    });
  });
});
