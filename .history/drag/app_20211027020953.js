const $DropBox = document.querySelector(".drop-box");
const $DragBox = document.querySelector(".drag-box");

const dragHandler = () => {
  console.log("dragged");
};

const dropHandler = (e) => {
  $DragBox.style.top = e.layerY + "px";
  $DragBox.style.left = e.layerX + "px";
  e.preventDefault();
};

$DragBox.addEventListener("drag", dragHandler);
$DropBox.addEventListener("drop", dropHandler);
