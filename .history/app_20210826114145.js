const draggedTarget = document.querySelector(".drag");
const dropZone = document.querySelector(".target");
const HandleDrag = (event) => {
  console.log("drag");
};

const HandleDragStart = (event) => {
  console.log("drag start");
};

const handleDragOver = (event) => {
  console.log("drag over");
};

const handleDrop = (event) => {
  console.log("drop");
};

draggedTarget.addEventListener("drag", HandleDrag);
draggedTarget.addEventListener("dragstart", HandleDragStart);
dropZone.addEventListener("drop", handleDrop);
dropZone.addEventListener("dragover", handleDragOver);
