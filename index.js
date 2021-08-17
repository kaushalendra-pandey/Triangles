let questions = document.querySelectorAll(".question")
let correctAns = document.querySelectorAll(".answer")
const allAnswers = document.querySelectorAll("input")
const correctAnswer = [3,180,60,90,28]

const checkAnswer = () => {
    for(let i=0;i<allAnswers.length;i++){
        if(allAnswers[i].value == correctAnswer[i]){
            correctAns[i].innerHTML = `Yep! Its correct.`
            correctAns[i].className = "success"
            
        }else{
            correctAns[i].innerHTML = `Nope! The correct answer is ${correctAnswer[i]}`
            correctAns[i].className = "error"
        }
        
    }
    window.scrollTo(0,0)
}