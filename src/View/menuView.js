import { state } from "../Model/state.js";

export function renderMenu(onClickReserve) {
  const contents = document.querySelector("#contents");
  contents.innerHTML = "";

  //「メニュー画面」という文字列(タイトル)
  const titleText = document.createElement("span");
  titleText.textContent = "メニュー画面";

  //ログインステータス
  const isLoggedInText = document.createElement("span");
  if (state.isLoggedIn) {
    isLoggedInText.textContent = "ログイン中";
  }

  //予約ボタン
  const reserveButton = document.createElement("button");
  reserveButton.textContent = "予約";
  reserveButton.addEventListener("click", onClickReserve);

  contents.appendChild(titleText);
  contents.appendChild(isLoggedInText);
  contents.appendChild(reserveButton);
}
