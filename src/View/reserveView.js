import { state } from "../Model/state.js";

export function renderReserve(onClickMenu) {
  const contents = document.querySelector("#contents");
  contents.innerHTML = "";

  //「予約画面」という文字列(タイトル)
  const titleText = document.createElement("span");
  titleText.textContent = "予約画面";

  //メニューへボタン
  const menuButton = document.createElement("button");
  menuButton.textContent = "メニューへ";
  menuButton.addEventListener("click", onClickMenu);

  contents.appendChild(titleText);
  contents.appendChild(menuButton);
}
