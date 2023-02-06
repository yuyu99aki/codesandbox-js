import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  //alert(inputText);
  document.getElementById("add-text").value = "";
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const el = document.createElement("p");
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => alert("comp"));

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    console.log(deleteTarget);
    document.getElementById("incompete-list-li").removeChild(deleteTarget);
  });

  el.className = "items";
  el.innerText = inputText;
  li.appendChild(div);
  div.appendChild(el);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(li);
  document.getElementById("incompete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
