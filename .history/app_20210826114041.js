const draggedTarget = document.querySelector(".drag");
const dropZone = document.querySelector(".target");
const HandleDrag = (event) => {
  console.log("drag");
};

const HandleDragStart = (event) => {
  console.log("drag start");
};

draggedTarget.addEventListener("drag", HandleDrag);
draggedTarget.addEventListener("dragstart", HandleDragStart);
