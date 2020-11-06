const quizData = [{
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Who is the president of the US?',
        a: 'Floring Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: '1998',
        correct: 'b'
    }
]

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

loadQuiz();

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
       
       quiz.innerHTML = `<h2>You answered correctly at ${score}/ ${quizData.length} questions.</h2>`;
    }
    }
    
});