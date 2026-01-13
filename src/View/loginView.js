import { state } from "../Model/state.js";

export function renderLogin(onClickLogin) {
  const contents = document.querySelector("#contents");
  contents.innerHTML = "";

  //ユーザー名入力欄
  const textUserName = document.createElement("span");
  textUserName.textContent = "ユーザー名";
  const inputUserName = document.createElement("input");
  inputUserName.classList.add("userName");

  //パスワード入力欄
  const textPassword = document.createElement("span");
  textPassword.textContent = "パスワード";
  const inputPassword = document.createElement("input");
  inputPassword.classList.add("password");

  //ログインボタン
  const loginButton = document.createElement("button");
  loginButton.textContent = "ログイン";
  loginButton.addEventListener("click", onClickLogin);

  //エラーメッセージ出力領域
  const errMsgList = document.createElement("ul");

  contents.appendChild(errMsgList);
  contents.appendChild(textUserName);
  contents.appendChild(inputUserName);
  contents.appendChild(textPassword);
  contents.appendChild(inputPassword);
  contents.appendChild(loginButton);
}
