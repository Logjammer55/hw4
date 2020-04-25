function quizGame(){
    
    let time = 0;
    const defaultTime = (15*questions.length);
    const penaltyTime = 15;
    let currentQuestion = 0;
    timeDisplayEl = document.getElementById("time-display")
    
    function timer() {
        time = defaultTime;
        mainInterval = setInterval(function(){
            time = time - 1;

            timeDisplayEl.innerHTML = time;

            if (time <= 0){
                // Causes mainInterval to end
                clearInterval(mainInterval);
                timeDisplayEl.innerHTML = "00";
                renderEndGame();
            }
        }, 1000);

    }
    
    let containerEl = document.getElementById("main-container");
    
    function createRow(rowTotal, content) {
        
        for (let i = 0; i < rowTotal; i++){
            const rowEl = document.createElement("div");
            rowEl.setAttribute("class", "row")
            const colEl = document.createElement("div");
            colEl.setAttribute("class", "col");
            colEl.append(content);
            rowEl.append(colEl);
            containerEl.append(rowEl);
            
        }
        
    }
    
    function renderQuestion() {
        containerEl.innerHTML = "";
        const questionEl = document.createElement("h3");
        questionEl.innerHTML = questions[currentQuestion].title;
        
        createRow(1, questionEl);

        let answerEl = "";
        
        for(let i=0; i < questions[currentQuestion].choices.length; i++){
       
            answerEl = document.createElement("button");
            answerEl.setAttribute("class", "btn btn-secondary m-1");
            answerEl.innerHTML = questions[currentQuestion].choices[i];
            createRow(1, answerEl)

            answerEl.addEventListener("click", function(){
                questions[currentQuestion].userAnswer = questions[currentQuestion].choices[i];
                answerCheck();
                switchQuestion();
            })
        }
    }
    
    
    function subtractTime() {
            // Subtracts
            time = time - penaltyTime;
    }
    
}
quizGame()