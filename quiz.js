const startButton= document.getElementById('start-btn');
const nextButton= document.getElementById('next-btn');

const questionContainerElement= document.getElementById('question-container');
const questionElement= document.getElementById('question');
const answerButtonsElement= document.getElementById('answer-buttons');

let shuffledQuestions,currectQuestionIndex;
let quizScore=0;


startButton.addEventListener('click',startGame);
nextButton.addEventListener('click' , () =>{
    currectQuestionIndex ++
    setnextQuestion();
});


function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions=questions.sort(() =>Math.random() -0.5);
    currectQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore=0;
}

function setnextQuestion()
    {
        resetState();
        showQuestion(shuffledQuestions[currectQuestionIndex]);
    }


function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach ((answer) =>
    {
        const button = document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct;

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) =>{
        setStatusClass(button,button.dataset.correct );
    });

    if(shuffledQuestions.length > currectQuestionIndex +1){
        nextButton.classList.remove("hide");
    }else{
        startButton.innerText = "restart";
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct){
        quizScore++;
    }
    document.getElementById('right-answers').innerText=quizScore;
}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    }else{
        element.classList.add("wrong");
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Which one of these is a Javascript Framework?',
        answers : [
            {text: 'Python',correct:false},
            {text: 'Django',correct:false},
            {text: 'React',correct:true},
            {text: 'Eclipse',correct:false},
        ],
    },

    {
        question: 'What is the smallest header in HTML by default?',
        answers : [
            {text: 'h6',correct:true},
            {text: 'h1',correct:false},
            {text: 'h4',correct:false},
            {text: 'h3',correct:false},
        ],
    },

    {
        question: 'Which attribute is used to provide a unique name to an HTML element?',
        answers : [
            {text: 'class',correct:false},
            {text: 'id',correct:true},
            {text: 'name',correct:false},
            {text: 'src',correct:false},
        ],
    },

    {
        question: 'Which HTML element is used to define description data?',
        answers : [
            {text: '<li>',correct:false},
            {text: '<dd>',correct:true},
            {text: '<dl>',correct:false},
            {text: '<td>',correct:false},
        ],
    },

    {
        question: 'Which of the following tags doesn’t require a closing tag?',
        answers : [
            {text: '<i>',correct:false},
            {text: '<p>',correct:false},
            {text: '<b>',correct:false},
            {text: '<br>',correct:true},
        ],
    },

    {
        question: 'Which property allows an image link to show a text label?',
        answers : [
            {text: 'src',correct:false},
            {text: 'alt',correct:true},
            {text: 'alternate',correct:false},
            {text: 'img',correct:false},
        ],
    },

    {
        question: 'How many sizes of headers are available in HTML by default?',
        answers : [
            {text: '3',correct:false},
            {text: '8',correct:false},
            {text: '6',correct:true},
            {text: '4',correct:false},
        ],
    },
]



