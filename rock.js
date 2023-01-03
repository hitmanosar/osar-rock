let play = document.querySelector(".play");

let interval;

let rps =document.querySelector('.rps');

let list = [
  {
    id: 1,
    name: "rock",
    src: "photo/rock.png",
  },

  {
    id: 2,
    name: "paper",
    src: "photo/paper.png",
  },

  {
    id: 3,
    name: "scissor",
    src: "photo/sci.png",
  },
];

let time = document.querySelector(".time");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const sci = document.querySelector(".sci");

let choose = document.querySelector(".choose");

let you;

let result;

let youimg = document.querySelector(".youimg");

let mark = document.querySelector(".mark");

let y = document.querySelector(".y");

let c = document.querySelector(".c");

let ymark = 0;

let cmark = 0;

let comimg = document.querySelector(".comimg");

let com = () => {
  result = list[Math.floor(Math.random() * list.length)];

  comimg.src = result.src;

  comimg.style["transform"] = "rotateY(180deg)";
};

play.addEventListener("click", () => {
  let song = document.createElement("audio");
  document.body.append(song);

  song.src = "audio/open.mp3";
  song.loop = true;
  song.volume = 0.1;
  song.play();
   rps.style['display'] = 'none';
  time.style["display"] = "block";
  clearInterval(interval);
  interval = setInterval(count_time, 1000);
});

let count = 4;

let count_time = () => {
  count--;
  time.textContent = count;

  if (count == 0) {
    count = 1;
    clearInterval(interval);
    time.style["display"] = "none";
    choose.style["display"] = "block";
    play.style["display"] = "none";
    mark.style["display"] = "block";
  }
};

rock.addEventListener("click", () => {
  youimg.src = list[0].src;

  you = list[0].name;

  com();
  check_rock();
  winner();
});

paper.addEventListener("click", () => {
  youimg.src = list[1].src;
  you = list[1].name;

  com();
  check_paper();
  winner();
});

sci.addEventListener("click", () => {
  youimg.src = list[2].src;
  you = list[2].name;

  com();
  check_sci();
  winner();
});

let check_rock = () => {
  if (you == "rock" && result.name == "scissor") {
    let song = document.createElement("audio");
    document.body.append(song);
    song.src = "audio/win.mp3";
    song.volume = 1;
    song.play();
    time.style["display"] = "block";
    time.textContent = "You Win";
    ymark++;
    y.textContent = ymark;
  } else if (you == "rock" && result.name == "rock") {
    let song = document.createElement("audio");
    document.body.append(song);
    song.src = "audio/sfx.mp3";
    song.volume = 1;
    song.play();
    time.style["display"] = "block";
    time.textContent = "Draw";
  } else {
    let song = document.createElement("audio");
    document.body.append(song);
    song.src = "audio/lose.mp3";
    song.volume = 1;
    song.play();
    time.style["display"] = "block";
    time.textContent = "You Lose";
    cmark++;
    c.textContent = cmark;
  }
};

let check_paper = () => {
  if (you == "paper" && result.name == "rock") {
    let song = document.createElement("audio");
    document.body.append(song);
    song.src = "audio/win.mp3";
    song.volume = 1;
    song.play();
    time.style["display"] = "block";
    time.textContent = "You Win";
    ymark++;
    y.textContent = ymark;
  } else if (you == "paper" && result.name == "paper") {
    let song = document.createElement("audio");
    document.body.append(song);
    song.src = "audio/sfx.mp3";
    song.volume = 1;
    song.play();
    time.style["display"] = "block";
    time.textContent = "Draw";
  } else {
    let song = document.createElement("audio");
    document.body.append(song);
    song.src = "audio/lose.mp3";
    song.volume = 1;
    song.play();
    time.style["display"] = "block";
    time.textContent = "You Lose";
    cmark++;
    c.textContent = cmark;
  }
};

let check_sci = () => {
  if (you == "scissor" && result.name == "paper") {
    let song = document.createElement("audio");
    document.body.append(song);
    song.src = "audio/win.mp3";
    song.volume = 1;
    song.play();
    time.style["display"] = "block";
    time.textContent = "You Win";
    ymark++;
    y.textContent = ymark;
  } else if (you == "scissor" && result.name == "scissor") {
    let song = document.createElement("audio");
    document.body.append(song);
    song.src = "audio/sfx.mp3";
    song.volume = 1;
    song.play();
    time.style["display"] = "block";
    time.textContent = "Draw";
  } else {
    let song = document.createElement("audio");
    document.body.append(song);
    song.src = "audio/lose.mp3";
    song.volume = 1;
    song.play();
    time.style["display"] = "block";
    time.textContent = "You Lose";
    cmark++;
    c.textContent = cmark;
  }
};

let popup = document.querySelector(".popup");
let retry = document.querySelector(".retry");
let gameover = document.querySelector(".gameover");

retry.addEventListener("click", () => {
  // ymark =0;
  // cmark =0;
  // choose.style['display'] = 'block';
  // popup.classList.remove('popup_open');
  window.location.href = "index.html";
});

let winner = () => {
  if (ymark > 9) {
    popup.classList.add("popup_open");
    gameover.textContent = "Game Over You Win!!!";
    choose.style["display"] = "none";
  }

  if (cmark > 9) {
    popup.classList.add("popup_open");
    gameover.textContent = "Game Over You Lose!!!";
    choose.style["display"] = "none";
  }
};
