const element = document.querySelector(".drag");

const handlerDrag = (event) => {
  event.dataTransfer.dropEffect = "move";
  console.log(event);
};

element.addEventListener("drag", handlerDrag);
