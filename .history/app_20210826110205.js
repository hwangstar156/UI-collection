const element = document.querySelector(".drag");

const handlerDrag = (event) => {
  event.dataTransfer.dropEffect = "copy";
};

element.addEventListener("drag", handlerDrag);
