// console.log("Hi");

let roundsTotal = document.getElementById('roundsTotal')
let endGameText = document.getElementById('endGameText')
let radioButton = document.querySelector('input[name="kreis"]:checked')
let fieldsetOne = document.getElementsByClassName('fieldsetOne')

let roundsValue = 0
let myScore = 0
let comScore = 0


const resultPoints = document.getElementById('resultPoints')
resultPoints.innerHTML = myScore + " : " + comScore



const letsPlay = (userChoice) => {

    radioButton = document.querySelector('input[name="kreis"]:checked').value

    roundBottonsValue.style.display = "none"
    roundsTotal.innerHTML = roundsValue + " / " + radioButton

    const moves = ["rock", "paper", "scissors"];
    const computerChoice = moves[Math.floor(Math.random() * 3)];
    // console.log(computerChoice);

    if (roundsValue < radioButton) {
        roundsValue++

        switch (userChoice + computerChoice) {
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                // console.log("drawn");
                break;
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                myScore++
                resultPoints.innerHTML = myScore + " : " + comScore
                // console.log("user wins, " + "com loose");
                break;
            case "rockpaper":
            case "scissorsrock":
            case "paperscissor":
                comScore++
                resultPoints.innerHTML = myScore + " : " + comScore
                break;
        }
        endGameText.innerHTML = userChoice + " (me) " + computerChoice + " (com) "
        // console.log(userChoice + computerChoice);
        if (roundsValue == radioButton && myScore > comScore) {
            console.log("user wins");
            endResult = "User wins!"
        } else if (roundsValue == radioButton && comScore > myScore) {
            console.log("com wins");
            endResult = "Com wins!"
        } else if (roundsValue == radioButton && comScore == myScore) {
            console.log("draw");
            endResult = "Draw!";
        } endGameText.innerHTML = endResult;
    }
}












// console.log(rock + symbolComp);
// switch (rock + symbolComp) {
//     case "rockrock":
//         console.log("drawn");
//         return "drawn"
//     case "rockpaper":
//         winComp++
//         resultPoints.innerHTML = winUser + " : " + winComp
//         console.log("com wins");
//         console.log(winComp);
//         return "com wins"
//     case "rockscissors":
//         winUser++
//         resultPoints.innerHTML = winUser + " : " + winComp
//         console.log("user wins");
//         console.log(winUser);
//         return "user wins"
// }
// }
// roundsTotal.innerHTML = roundsValue + " / " + radioButton
// }



// const submitRock = () => {
//     gamePlay("Rock");
// }
// const submitPaper = () => {
//     gamePlay("Paper");
// }
// const submitScissors = () => {
//     gamePlay("Scissors");
// }
// function buttonsChoice() {


// const submitRock = () => {
// computerChoice()
// radioButton = document.querySelector('input[type="radio"]:checked').value
// console.log(rock + symbolComp);
// switch (rock + symbolComp) {
//     case "rockrock":
//         console.log("drawn");
//         return "drawn"
//     case "rockpaper":
//         winComp++
//         resultPoints.innerHTML = winUser + " : " + winComp
//         console.log("com wins");
//         console.log(winComp);
//         return "com wins"
//     case "rockscissors":
//         winUser++
//         resultPoints.innerHTML = winUser + " : " + winComp
//         console.log("user wins");
//         console.log(winUser);
//         return "user wins"
// }


// function computerChoice() {



//     let submitPaper = () => {
//         computerChoice()

//         console.log(paper + symbolComp);
//         switch (paper + symbolComp) {
//             case "paperpaper":
//                 console.log("drawn");
//                 return "drawn"
//             case "paperscissors":
//                 winComp++
//                 resultPoints.innerHTML = winUser + " : " + winComp
//                 console.log(winComp);
//                 console.log("com wins");
//                 break;
//             case "paperrock":
//                 winUser++
//                 resultPoints.innerHTML = winUser + " : " + winComp
//                 console.log(winUser);
//                 console.log("user wins");
//                 break;
//         }
//     }
//     let submitScissors = () => {
//         computerChoice()

//         console.log(scissors + symbolComp);
//         switch (scissors + symbolComp) {
//             case "scissorsscissors":
//                 console.log("drawn");
//                 return "drawn"
//             case "scissorspaper":
//                 winComp++
//                 resultPoints.innerHTML = winUser + " : " + winComp
//                 console.log(winComp);
//                 console.log("com wins");
//                 break;
//             case "scissorsrock":
//                 winUser++
//                 resultPoints.innerHTML = winUser + " : " + winComp
//                 console.log(winUser);
//                 console.log("user wins");
//                 break;
//         }
//     }
// }