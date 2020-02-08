const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;  // 1~3 중 하나의 사진 선택.
  image.classList.add("bgImage");
  body.prepend(image);
}

// 임의의 숫자를 만들어서 리턴.
function genRandom() {
  // 0~2 중 랜덤으로 하나의 수를 리턴 (사진이 1~3이니까)
  const number = Math.floor(Math.random() * IMG_NUMBER);  // Math.random()은 임의의 숫자를 생성. floor는 버림. Math.ceil은 올림.
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
