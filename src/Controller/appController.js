import { state } from "../Model/state.js";
import { renderLogin } from "../View/loginView.js";
import { renderMenu } from "../View/menuView.js";

export function initAppController() {
  //画面描画ハンドラ
  function handleRender(state) {
    if (state.currentView === "login") {
      //ログイン画面
      //引数：ログインボタン押下時のイベント
      renderLogin(() => {
        //stateの変更
        state.currentView = "menu";
        state.isLoggedIn = true;
        //再描画
        handleRender(state);
      });
    } else if (state.currentView === "menu") {
      //メニュー画面
      renderMenu();
    }
  }

  //画面描画
  handleRender(state);
}
