const element = document.querySelector(".target");

const handlerDragStart = (event) => {
  event.dataTransfer.setData("application/my-app", ev.target.className);
  event;
};

const handlerDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

const handlerDrag = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("application/my-app");
  event.target.appendChild(document.getElementsByClassName(data));
};

element.addEventListener("dragover", handlerDragOver);
element.addEventListener("drag", handlerDrag);
