// Khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const heroImg = document.querySelector(".hero-img");
  const heroText = document.querySelector(".hero p");

  const originalSrc = heroImg.src;
  const originalText = heroText.textContent;

  const placeImages = document.querySelectorAll(".destinations .place img");

  // Thêm tabindex cho từng ảnh để có thể dùng phím Tab
  placeImages.forEach((img, index) => {
    img.setAttribute("tabindex", index + 1);
  });

  // Gắn các sự kiện chuột và bàn phím
  placeImages.forEach(function (img) {
    const newSrc = img.src;
    const newText = img.dataset.description || img.alt;

    // Khi di chuột vào
    img.addEventListener("mouseover", function () {
      heroImg.src = newSrc;
      heroText.textContent = newText;
      console.log("Mouseover:", newText);
    });

    // Khi rời chuột
    img.addEventListener("mouseout", function () {
      heroImg.src = originalSrc;
      heroText.textContent = originalText;
      console.log("Mouseout:", img.alt);
    });

    // Khi focus bằng bàn phím (Tab)
    img.addEventListener("focus", function () {
      heroImg.src = newSrc;
      heroText.textContent = newText;
      img.style.outline = "3px solid #00aaff";
      console.log("Focus:", newText);
    });

    // Khi mất focus
    img.addEventListener("blur", function () {
      heroImg.src = originalSrc;
      heroText.textContent = originalText;
      img.style.outline = "none";
      console.log("Blur:", img.alt);
    });
  });
});
