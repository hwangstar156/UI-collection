const element = document.querySelector(".drag");

const handlerDrag = (event) => {
  console.log(event);
  event.dataTransfer.dropEffect = "copy";
};

element.addEventListener("drag", handlerDrag);
