
var questionEl = document.querySelector('#question-title');
var answerChoicesEl = document.querySelector('#answer-choices');
var divContainerEl = document.querySelector('#div-container');
var questionResultDiv = document.querySelector('#question-result')
var StartPopUp = document.querySelector('#start-popup')
var end = document.querySelector('#end');
var initialsEL = document.querySelector('#initials');
var resultsEl = document.querySelector('#highscores');
   
   
var questions = [
        {
            question: 'What do you start every html tag with?',
            choices: ['[]','<>','{}','()',],
            correctAnswer: '<>',
        },
        {
            question: 'What is the commonly used data?',
            choices: ['booleans','strings','numbers', 'All of the above'],
            correctAnswer: 'All of the above',
        },
        {
            question: 'How do you create an array?',
            choices: ['var ex = []','var ex = ()', 'var ex = {}', 'var ex = <>'],
            correctAnswer: 'var ex = []',
        },
        {
            question: 'String values must be enclosed with?',
            choices: ['curly brackets','commas','quotes','parenthesis'],
            correctAnswer: 'quotes',
        },
        {
            question: 'Which pop ups is used for the user to type in?',
            choices: ['prompts', 'alerts','confirm', 'All of the above'],
            correctAnswer: 'prompts',
        },
        {
            question: 'which boolean operators can be used in JavaScript',
            choices: ['"or" operator ||','"and" operator &&','"not" operator !','All of the above'],
            correctAnswer: 'All of the above',
        },
        {
            question: 'Which data types store words?',
            choices: ['numbers','booleans','strings','floats'],
            correctAnswer: 'strings',
        },
        
       
        


    ];

    end.style.display = 'none';

    var timerInterval;
    var timeRemaining = 60;
    function startTimer(){
         timerInterval = setInterval(function(){
             timeRemaining--;
 
             if(timeRemaining === 0){
                 clearInterval(timerInterval);
                 showResults();
                 
             }
             //check if there is no more questions
             if(questionIndex === questions.length){
                 clearInterval(startTimer);
                 showResults();
             }else{
       askNextQuestion();
                
             }
        
       
 
             document.getElementById('time').textContent = timeRemaining;
             console.log('interval running', timeRemaining);
         }, 1000);     
     }

    
    function showResults(){
        clearInterval(timerInterval);
        var results = document.getElementById('end');
        results.removeAttribute('class');

        var score = document.getElementById('final-score');
        score.textContent = timeRemaining;

        divContainerEl.style.display = 'none';

        questionResultDiv.remove();

        end.style.display = 'block';
    }

    var questionIndex = 0;
    //creating the next question
    function askNextQuestion(){

        
        var holdQuestion = questions[questionIndex].question;
        questionEl.textContent = holdQuestion;
        var holdChoice1 = questions[questionIndex].choices[0];
        var holdChoice2 = questions[questionIndex].choices[1];
        var holdChoice3 = questions[questionIndex].choices[2];
        var holdChoice4 = questions[questionIndex].choices[3];

        answerChoicesEl.innerHTML = '';

        

        var liTag = document.createElement('li');
        liTag.setAttribute('class', 'li_all');
        var btn = document.createElement('button');
        btn.setAttribute('class', 'btn_all');
        btn.textContent = holdChoice1;
        liTag.appendChild(btn);
        answerChoicesEl.appendChild(liTag);
        divContainerEl.appendChild(answerChoicesEl);

        var liTag2 = document.createElement('li');
        liTag2.setAttribute('class', 'li_all');
        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'btn_all');
        btn2.textContent = holdChoice2;
        liTag2.appendChild(btn2);
        answerChoicesEl.appendChild(liTag2);
        divContainerEl.appendChild(answerChoicesEl); 

        var liTag3 = document.createElement('li');
        liTag3.setAttribute('class', 'li_all');
        var btn3 = document.createElement('button');
        btn3.setAttribute('class', 'btn_all');
        btn3.textContent = holdChoice3;
        liTag3.appendChild(btn3);
        answerChoicesEl.appendChild(liTag3);
        divContainerEl.appendChild(answerChoicesEl);

        var liTag4 = document.createElement('li');
        liTag4.setAttribute('class', 'li_all');
        var btn4 = document.createElement('button');
        btn4.setAttribute('class', 'btn_all');
        btn4.textContent = holdChoice4;
        liTag4.appendChild(btn4);
        answerChoicesEl.appendChild(liTag4);
        divContainerEl.appendChild(answerChoicesEl);
            

        

        var btnAll = document.querySelectorAll('.btn_all')
        btnAll.forEach(function (event){
            event.addEventListener('click', onCLickHandler)
        });
    


        }

        function onCLickHandler(event){
            var answerText = event.target.textContent
            if(answerText === questions[questionIndex].correctAnswer){
                timeRemaining = timeRemaining;
                questionResultDiv.setAttribute('style', 'color: green');
                questionResultDiv.textContent = "Correct!";
                timeRemaining = timeRemaining + 10;
                questionIndex++;
                
                
            }else{
                questionResultDiv.setAttribute('style', 'color:red');
                questionResultDiv.textContent = 'Wrong!';
                timeRemaining = timeRemaining - 10;
            }

            
            }



        

            
    

    

function startGame(){
    startTimer();
    askNextQuestion();
    StartPopUp.style.display = 'none';
}



function saveResults(){
    var initials = initialsEL.value.trim();

    if (initials !== ""){
        var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

        var newScore = {
            score: timeRemaining,
            initials: initials,
        };

        highscores.push(newScore);
        
        window.localStorage.setItem('highscores', JSON.stringify(highscores));

        
    }
}

function printHighscores() {
    resultsEl.textContent = 'Your final score is' + timeRemaining;
    
  }







    
