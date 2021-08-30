const realInput = document.querySelector(".img-input");
const imgTag = document.querySelector(".img");

var resizeImage = function (settings) {
  var file = settings.file;
  var maxSize = settings.maxSize;
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
  return new Promise(function (ok, no) {
    if (!file) {
      return;
    }
    if (!file.type.match(/image.*/)) {
      no(new Error("Not an image"));
      return;
    }
    reader.onload = function (readerEvent) {
      image.onload = function () {
        return ok(resize());
      };
      image.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  });
};

const handleImgInput = (e) => {
  const config = {
    file: e.target.files[0],
    maxSize: 350,
  };
  resizeImage(config)
    .then((resizedImage) => {
      const url = window.URL.createObjectURL(resizedImage);
      const img = document.createElement("img");
      img.setAttribute("src", url);
      img.className = "profile-img";
      imgTag.appendChild(img);
      //   img.style.transform = `translate(${(imgTag.width - img.width) / 2}px , ${
      //     (imgTag.height - img.height) / 2
      //   }px)`;
    })
    .then(() => {
      const img = document.querySelector(".profile-img");
      console.log(img);
      console.log(imgTag.offsetWidth, imgTag.offsetHeight);
    })
    .catch((err) => {
      console.log(err);
    });
};

realInput.addEventListener("change", handleImgInput);
