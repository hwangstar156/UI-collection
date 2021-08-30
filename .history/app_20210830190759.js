const realInput = document.querySelector(".img-input");
const submitBtn = document.querySelector(".submit-btn");
const imgTag = document.querySelector(".img");

var resizeImage = function (e) {
  const file = e.target.files[0];
  var maxSize = 500;
  var reader = new FileReader();
  var image = new Image();
  var canvas = document.createElement("canvas");
  var dataURItoBlob = function (dataURI) {
    var bytes =
      dataURI.split(",")[0].indexOf("base64") >= 0
        ? atob(dataURI.split(",")[1])
        : unescape(dataURI.split(",")[1]);
    var mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
    var max = bytes.length;
    var ia = new Uint8Array(max);
    for (var i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);
    return new Blob([ia], { type: mime });
  };
  var resize = function () {
    var width = image.width;
    var height = image.height;
    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else {
      if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
    }
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);
    var dataUrl = canvas.toDataURL("image/jpeg");
    return dataURItoBlob(dataUrl);
  };
  if (!file) {
    return;
  }
  if (!file.type.match(/image.*/)) {
    return;
  }
  reader.onload = (event) => {
    image.onload = () => {
      console.log(resize());
    };
    image.src = event.target.result;
  };
  reader.readAsDataURL(file);
  console.log(image);
  imgTag.appendChild(image);
};

realInput.addEventListener("change", resizeImage);
