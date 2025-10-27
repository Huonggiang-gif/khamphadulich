// Chờ trang tải xong
document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần ảnh và mô tả chính ở phần hero
  const heroImg = document.querySelector(".hero-img");
  const heroText = document.querySelector(".hero p");

  // Lưu lại ảnh và mô tả ban đầu
  const originalSrc = heroImg.src;
  const originalText = heroText.textContent;

  // Lấy tất cả ảnh trong phần điểm đến
  const placeImages = document.querySelectorAll(".destinations .place img");

  // Gán sự kiện cho từng ảnh
  placeImages.forEach(function (img) {
    img.addEventListener("mouseover", function () {
      console.log("🖱 Di chuột qua:", img.alt);
      // Đổi ảnh lớn thành ảnh được hover
      heroImg.src = img.src;
      // Đổi mô tả
      heroText.textContent = "Khám phá " + img.alt;
    });

    img.addEventListener("mouseout", function () {
      console.log("➡ Rời chuột khỏi:", img.alt);
      // Khôi phục lại ảnh và mô tả ban đầu
      heroImg.src = originalSrc;
      heroText.textContent = originalText;
    });
  });
});
