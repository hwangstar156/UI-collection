const element = document.querySelector(".drag");

const handlerDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

const handlerDrag = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(data));
};

element.addEventListener("dragover", handlerDragOver);
element.addEventListener("drag", handlerDrag);
