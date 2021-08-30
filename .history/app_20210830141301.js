const realInput = document.querySelector(".img-input");
const submitBtn = document.querySelector(".submit-btn");

const realInputFile = (e) => {
  const files = e.target.files;
  console.log(files);
};

submitBtn.addEventListener("click", () => {
  realInput.click();
});
realInput.addEventListener("change", realInputFile);
