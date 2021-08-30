const realInput = document.querySelector(".img-input");
const submitBtn = document.querySelector(".submit-btn");
const rootUpload = document.querySelector("#root");

const realInputFile = (e) => {
  const files = e.target.files;
  const file = files[0];
  console.log(file);
  if (!file.type.match("image/.*")) {
    alert("이미지를 업로드 해주세요");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    console.log(e.target);
    const result = document.createElement("img");
    result.setAttribute("src", e.target.result);
    rootUpload.appendChild(result);
  };
  reader.readAsDataURL(file);
};

submitBtn.addEventListener("click", () => {
  realInput.click();
});
realInput.addEventListener("change", realInputFile);
