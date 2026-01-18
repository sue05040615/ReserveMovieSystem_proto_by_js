import { state } from "../Model/state.js";

export function renderReserve(onClickMenu, movieList) {
  const contents = document.querySelector("#contents");
  contents.innerHTML = "";

  //「予約画面」という文字列(タイトル)
  const titleText = document.createElement("span");
  titleText.textContent = "予約画面";

  //メニューへボタン
  const menuButton = document.createElement("button");
  menuButton.textContent = "メニューへ";
  menuButton.addEventListener("click", onClickMenu);

  const ul = document.createElement("ul");
  movieList.forEach((movie) => {
    const li = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent = movie.movieTitle + ":";
    const screeningTime = document.createElement("span");
    screeningTime.textContent = movie.screeningTime;
    li.appendChild(movieTitle);
    li.appendChild(screeningTime);
    ul.appendChild(li);
  });

  contents.appendChild(titleText);
  contents.appendChild(menuButton);
  contents.appendChild(ul);
}
