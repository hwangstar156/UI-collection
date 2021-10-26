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
  $DragBox.style.top = e.layerY + "px";
  $DragBox.style.left = e.layerX + "px";
};

$DragBox.addEventListener("drag", dragHandler);
$DropBox.addEventListener("drop", dropHandler);
$DropBox.addEventListener("dragover", dropHandler);
