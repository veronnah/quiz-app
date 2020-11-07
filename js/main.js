let quizData = [];
let currentQuestion = 0;

const answerELs = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz")
let questionEl = document.getElementById("question");

let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let answer;
window.onload = function(){
    fetch("/json/quizdata.json")
    .then(response => {
        return response.json();
    }).then(json => {
        quizData =  json;
        
        loadQuiz();
    });

}

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {

    let answer = undefined; 

    answerELs.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    const answerELs = document.querySelectorAll(".answer");

    answerELs.forEach(answerEl => { 
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click', () => {
    //check to see the answer 
    const answer = getSelected();
   

    if (answer) {
        if( answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
       
       quiz.innerHTML = `
       <h2>You answered correctly at ${score}/ ${quizData.length} questions.</h2>
        <button onclick = "location.reload()">Reload</button>
       `;
    }
    }
    
});