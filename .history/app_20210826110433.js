const element = document.querySelector(".drag");

const handlerDrag = (event) => {
  console.log(event);
  event.dataTransfer.dropEffect = "move";
};

element.addEventListener("drag", handlerDrag);
