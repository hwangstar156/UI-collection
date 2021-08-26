const element = document.querySelector(".target");
const draggedElement = document.querySelector(".drag");
const handlerDragStart = (event) => {
  event.dataTransfer.setData("application/my-app", event.target.className);
  event.dataTransfer.dropEffect = "move";
};

const handlerDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

const handlerDrag = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("application/my-app");
  event.target.appendChild(document.getElementsByClassName(data));
  console.log(event);
};
draggedElement.addEventListener("dragstart", handlerDragStart);
element.addEventListener("dragover", handlerDragOver);
element.addEventListener("drag", handlerDrag);
