const realInput = document.querySelector(".img-input");
const submitBtn = document.querySelector(".submit-btn");
const rootUpload = document.querySelector("#root");

const realInputFile = (e) => {
  const files = e.target.files;
  const file = files[0];

  if (!file) {
    return;
  }
  if (!file.type.match("image/.*")) {
    alert("이미지를 업로드 해주세요");
    return;
  }
  const img = document.createElement("img");
  const reader = new FileReader();
  reader.onload = (readerEvent) => {
    img.src = readerEvent.target.result;
    const canvas = document.createElement("canvas");
    const max_size = 544;
    let width = img.width;
    let height = img.height;
    if (width > height) {
      if (width > max_size) {
        height *= max_size / width;
        width = max_size;
      }
    } else {
      if (height > max_size) {
        width *= max_size / height;
        height = max_size;
      }
    }
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);
    const dataUrl = canvas.toDataURL("image/png");
    rootUpload.src = dataUrl;
  };
  reader.readAsDataURL(file);
};

submitBtn.addEventListener("click", () => {
  realInput.click();
});
realInput.addEventListener("change", realInputFile);
