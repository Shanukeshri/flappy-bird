function createpillar() {



    setInterval(() => {
      let multi = Math.random();
      let pillarPair = document.createElement("div");
      pillarPair.classList.add("pillar-unit");
      pillarPair.style.left = "1300px";
      document.body.appendChild(pillarPair);
  
      let pillarUp = document.createElement("div");
      pillarUp.classList.add("pillar-up");
      pillarUp.style.height = `${multi*500}px`
      pillarPair.appendChild(pillarUp);
  
      let pillarDown = document.createElement("div");
      pillarDown.classList.add("pillar-down");
      pillarDown.style.height = `calc(100vh - ${multi*500}px - 170px)`;
      pillarPair.appendChild(pillarDown);
  
      let lt = 1300;
  
      function movePillar() {
        if (lt >= -90) {
          pillarPair.style.left = `${lt - 2.5}px`; 
          lt -= 2.5;
          requestAnimationFrame(movePillar);
        } else {
          pillarPair.remove();
        }
      }
  
      requestAnimationFrame(movePillar);
    }, 1750);
}
  
  createpillar();
