import { state } from "../Model/state.js";
import { renderLogin } from "../View/loginView.js";
import { renderMenu } from "../View/menuView.js";
import { renderReserve } from "../View/reserveView.js";
import { getMovieList } from "../Service/appService.js";

export function initAppController() {
  //画面描画ハンドラ
  function handleRender(state) {
    if (state.currentView === "login") {
      //ログイン画面描画
      //引数：ログインボタン押下時のイベント
      renderLogin(() => {
        //stateの変更
        state.currentView = "menu";
        state.isLoggedIn = true;
        //再描画
        handleRender(state);
      });
    } else if (state.currentView === "menu") {
      //メニュー画面描画
      //引数：予約ボタン押下時のイベント
      renderMenu(() => {
        //stateの変更
        state.currentView = "reserve";
        //再描画
        handleRender(state);
      });
    } else if (state.currentView === "reserve") {
      //予約画面描画
      //引数1：メニューへボタン押下時のイベント
      //引数2：映画一覧
      renderReserve(() => {
        //stateの変更
        state.currentView = "menu";
        //再描画
        handleRender(state);
      }, getMovieList());
    }
  }

  //画面描画
  handleRender(state);
}
