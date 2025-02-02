let alive = true;

function play() {
    alive = true;
    while (alive) {
        createpillar();
    }
}

function createpillar() {

    setInterval(() => {

        let pillarPair = document.createElement("div");
        pillarPair.classList.add("pillar-unit")
        pillarPair.style.left = `1300px`

        document.body.appendChild(pillarPair)

        let pillarUp = document.createElement("div");
        pillarUp.classList.add("pillar-up")
        pillarPair.appendChild(pillarUp);
        
        let pillarDown = document.createElement("div");
        pillarDown.classList.add("pillar-down")
        pillarPair.appendChild(pillarDown);

        let cnt = 1
        let rt=2.5
        while(pillarPair.style.left >= `-90px`){
            requestAnimationFrame(()=>{

                pillarPair.style.left = `${1300 - 2.5 * cnt }px`
                cnt++

            })
        }
        pillarPair.remove();

    }, 1750)

}

function jump() {


}

createpillar();