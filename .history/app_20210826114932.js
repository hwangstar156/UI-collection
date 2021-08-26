const draggedTarget = document.querySelector(".drag");
const dropZone = document.querySelector(".target");
const HandleDrag = (event) => {
  console.log("drag");
};

const HandleDragStart = (event) => {
  event.dataTransfer.setData("targetId", event.target.id);
};

const handleDragOver = (event) => {
  event.preventDefault();
  console.log("drag over");
};

const handleDrop = (event) => {
  event.preventDefault();
  const targetId = event.dataTransfer.getData("targetId");
  event.target.appendChild(document.getElementById(targetId));
};

draggedTarget.addEventListener("drag", HandleDrag);
draggedTarget.addEventListener("dragstart", HandleDragStart);
dropZone.addEventListener("drop", handleDrop);
dropZone.addEventListener("dragover", handleDragOver);
