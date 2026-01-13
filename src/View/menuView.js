import { state } from "../Model/state.js";

export function renderMenu() {
  const contents = document.querySelector("#contents");
  contents.innerHTML = "";

  //「メニュー画面」という文字列
  const titleText = document.createElement("span");
  titleText.textContent = "メニュー画面";

  //ログインステータス
  const isLoggedInText = document.createElement("span");
  if (state.isLoggedIn) {
    isLoggedInText.textContent = "ログイン中";
  }

  contents.appendChild(titleText);
  contents.appendChild(isLoggedInText);
}
