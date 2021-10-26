const $DropBox = document.querySelector(".drop-box");
const $DragBox = document.querySelector(".drag-box");

const dragHandler = (e) => {
  console.log("dragged");
};

const dragOverHandler = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
};

const dropHandler = (e) => {
  e.preventDefault();
  console.log(e.layerX, e.layerY);
};

$DragBox.addEventListener("drag", dragHandler);
$DragBox.addEventListener("dragend", (e) => {
  console.log(e);
  $DragBox.style.top = e.clientY + "px";
  $DragBox.style.left = e.clientX + "px";
});
$DropBox.addEventListener("drop", dropHandler);
$DropBox.addEventListener("dragover", dropHandler);
