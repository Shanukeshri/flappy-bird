
let score = -3;
let alive = false;
let pilID;
let fallId;
let jumpId;
let countId;
let isJumping = false;
let cnt = 0

window.addEventListener("keydown", space);

function space(event) {
  if (event.key === " ") {
    if (alive) {
      isJumping = true;
      setTimeout(() => { isJumping = false }, 100)
      requestAnimationFrame(jump);

    }
    else {
      alive = true;
      if (cnt > 0) {
        divDelete();
      }
      play();
      cnt++;
    }
  }
}

function divDelete() {
  let divArr = Array.from(document.getElementsByClassName("pillar-unit"));
  for (pillarUnit of divArr) {
    document.body.removeChild(pillarUnit)
  }
  let blur = document.getElementById("blur")
  let score = document.getElementById("scorebrd")
  document.body.removeChild(blur)

  document.getElementById("bird").style.top = `340px`
}

function jump() {

  let currHt = document.getElementById("bird").getBoundingClientRect().y;
  document.getElementById("bird").style.top = `${currHt - 17}px`

  if (isJumping) {
    requestAnimationFrame(jump)
  }

}


function play() {
  score = -3 
  countScore()

  function fall() {
    let currHt = document.getElementById("bird").getBoundingClientRect().y;
    document.getElementById("bird").style.top = `${currHt + 4}px`
    if (alive) { fallId = requestAnimationFrame(fall) }
  }
  fallId = requestAnimationFrame(fall);
  createpillar();
}


function createpillar() {
  pilID = setInterval(() => {
    let multi = Math.random();
    let pillarPair = document.createElement("div");
    pillarPair.classList.add("pillar-unit");
    pillarPair.style.left = "1300px";
    document.body.appendChild(pillarPair);

    let pillarUp = document.createElement("div");
    pillarUp.classList.add("pillar-up");
    pillarUp.style.height = `${multi * 500}px`
    pillarPair.appendChild(pillarUp);

    let pillarDown = document.createElement("div");
    pillarDown.classList.add("pillar-down");
    pillarDown.style.height = `calc(100vh - ${multi * 500}px - 170px)`;
    pillarPair.appendChild(pillarDown);

    let lt = 1300;

    function movePillar() {
      if (lt >= -90) {
        pillarPair.style.left = `${lt - 2.5}px`;
        lt -= 2.5;


        let bHitBox = document.getElementById("bird").getBoundingClientRect();
        let dHitBox = pillarDown.getBoundingClientRect();
        let uHitBox = pillarUp.getBoundingClientRect();



        let bheigt = bHitBox.height, bx = bHitBox.x, by = bHitBox.y, ux = uHitBox.x, dx = dHitBox.x, bwidth = bHitBox.width;
        let uwidth = uHitBox.width, uheight = uHitBox.height, dwidth = dHitBox.width, dheight = dHitBox.height;

        if (bx >= (ux - bwidth) && bx <= (ux + uwidth) && by <= uheight) {
          clearInterval(pilID)
          cancelAnimationFrame(fallId)
          collision();
        }
        else if (bx >= (dx - bwidth) && bx <= (dx + dwidth) && by >= (uheight + 170 - bheigt)) {
          clearInterval(pilID)
          cancelAnimationFrame(fallId)
          collision();
        }
        else if (by <= 0 || by >= 672) {
          clearInterval(pilID)
          cancelAnimationFrame(fallId)
          collision();
        }

        if (alive) {
          requestAnimationFrame(movePillar);
        }

      } else {
        pillarPair.remove();
      }
    }

    requestAnimationFrame(movePillar);
  }, 1900);
}

function collision() {
  
  cancelAnimationFrame(fallId)
  clearInterval(countId)
  alive = false;

  const blur = document.createElement("div");
  blur.setAttribute("id" , "blur")
  document.body.appendChild(blur);

  const scorebrd = document.createElement("div");
  scorebrd.setAttribute("id" , "scorebrd")
  scorebrd.innerText = `SCORE : ${score}`

  blur.appendChild(scorebrd);
}

function countScore(){
  countId = setInterval(()=>{score++},1900)
}
