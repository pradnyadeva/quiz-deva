const quizData = [
    {
        question: "Deva date of birth ?",
        a: "19-05-2000",
        b: "11-01-1999",
        c: "21-03-2000",
        d: "19-06-2000",
        correct: "a"
    }, {
        question: "What is deva favourite food ?",
        a: "French toast",
        b: "Indomie",
        c: "Nasi Goreng",
        d: "Lele Goreng",
        correct: "c"
    }, {
        question: "What is deva favourite drink ?",
        a: "Coffee",
        b: "Ice Tea",
        c: "Alcohol",
        d: "Water",
        correct: "a"
    }, {
        question: "Born Date",
        a: "19-05-2000",
        b: "11-01-1999",
        c: "21-03-2000",
        d: "19-06-2000",
        correct: "a"
    }
]

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const quiz_btn = document.getElementById("submit-button");
const quiz_container = document.getElementById("quiz-container");
let quizCounter = 0;
let points = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[quizCounter];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function deselectAnswer(){
    const answer_radio = document.getElementsByName("answer");
    for(let i = 0; i<answer_radio.length;i++){
        answer_radio[i] = false;
    }
    
}


quiz_btn.addEventListener("click", () => {
        const answer = document.querySelector( 'input[name="answer"]:checked');   

        if (answer){
            if(answer.id == quizData[quizCounter].correct){
                points++;

            } else{
                alert("Wrong Choice");
            }
        }

        quizCounter++;
        if (quizCounter < quizData.length){
            loadQuiz();
        } else {
            quiz_container.innerHTML = `
                <h2>You answered correctly at ${points}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
});
