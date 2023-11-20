// Lắng nghe sự kiện click trên các nút "Thay đồ" trong phần áo
document.querySelectorAll("#ao .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    // Lấy đường dẫn ảnh từ thuộc tính 'src' của ảnh trong cùng một container
    var imgUrl = this.previousElementSibling.src;
    // Hiển thị ảnh trong phần contain
    showInContain("bikinitop", imgUrl);
  });
});

// Lắng nghe sự kiện click trên các nút "Thay đồ" trong phần quần
document.querySelectorAll("#quan .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("bikinibottom", imgUrl);
  });
});

// Lắng nghe sự kiện click trên các nút "Thay đồ" trong phần giày
document.querySelectorAll("#giay .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("feet", imgUrl);
  });
});

// Lắng nghe sự kiện click trên các nút "Thay đồ" trong phần túi xách
document.querySelectorAll("#tuixach .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("handbag", imgUrl);
  });
});

// Lắng nghe sự kiện click trên các nút "Thay đồ" trong phần dây chuyền
document.querySelectorAll("#daychuyen .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("necklace", imgUrl);
  });
});

// Lắng nghe sự kiện click trên các nút "Thay đồ" trong phần kiểu tóc
document.querySelectorAll("#kieutoc .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("hairstyle", imgUrl);
  });
});

// Lắng nghe sự kiện click trên các nút "Thay đồ" trong phần nền
document.querySelectorAll("#nen .btn-primary").forEach(function (button) {
  button.addEventListener("click", function () {
    var imgUrl = this.previousElementSibling.src;
    showInContain("background", imgUrl);
  });
});

// Hàm hiển thị ảnh trong phần contain
function showInContain(itemClass, imgUrl) {
  // Lấy phần tử trong phần contain tương ứng với loại đồ (áo, quần, giày, ...)
  var item = document.querySelector("." + itemClass);
  // Đặt đường dẫn ảnh cho phần tử
  item.style.backgroundImage = 'url("' + imgUrl + '")';
  item.style.backgroundSize = "cover";
  item.style.backgroundPosition = "center";
}
