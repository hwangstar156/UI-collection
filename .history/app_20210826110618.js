const element = document.querySelector(".drag");

const handlerDrag = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  console.log(event);
};

element.addEventListener("dragover", handlerDragOver);
