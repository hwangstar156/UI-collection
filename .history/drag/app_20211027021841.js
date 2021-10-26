const $DropBox = document.querySelector(".drop-box");
const $DragBox = document.querySelector(".drag-box");

const dragHandler = () => {
  console.log("dragged");
};

const dragOverHandler = (e) => {
  e.preventDefault();
  console.log("dwdw");
};

const dropHandler = (e) => {
  e.preventDefault();
  console.log("drop");

  $DragBox.style.top = e.layerY + "px";
  $DragBox.style.left = e.layerX + "px";
};

$DragBox.addEventListener("drag", dragHandler);
$DropBox.addEventListener("drop", dropHandler);
$DropBox.addEventListener("dropover", dropHandler);
