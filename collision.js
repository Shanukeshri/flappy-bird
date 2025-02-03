function collision() {
    cancelAnimationFrame(fallId)
    alive = false;
  
    const blur = document.createElement("div");
    blur.setAttribute("id" , "blur")
  
    blur.style.width = "100%";
    blur.style.height = "100%";
    blur.style.backgroundColor = "rgba(225,225,225,0.5)";
    blur.style.position = "absolute";
    blur.style.top = "0";
    blur.style.left = "0";
  
    document.body.appendChild(blur);
    const scorebrd = document.createElement("div");
    scorebrd.setAttribute("id" , "scorebrd")
  
    scorebrd.innerText = `SCORE : ${score}`;
    scorebrd.style.height = "100px";
    scorebrd.style.position = "absolute";
    scorebrd.style.top = "50%";
    scorebrd.style.left = "50%";
    scorebrd.style.transform = "translate(-50%, -50%)";
    scorebrd.style.fontSize = "24px";
    scorebrd.style.color = "black";
    scorebrd.style.textAlign = "center";
    scorebrd.style.padding = "20px";
    scorebrd.style.backgroundColor = "white";
    scorebrd.style.borderRadius = "10px";
    scorebrd.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  
    blur.appendChild(scorebrd);
  }
  
  
  
  