import {useState} from "react";

function App() {
  const questions = [
    {
      questionText: "what is the capital of vermont?",
      answerOptions: [
        { answerText: "Burlington", isCorrect: false },
        { answerText: "Essex", isCorrect: false },
        { answerText: "Montpieler", isCorrect: true },
        { answerText: "williston", isCorrect: false },
      ],
    },
    {
      questionText: "what is the capital of egypt?",
      answerOptions: [
        { answerText: "Alexandria", isCorrect: false },
        { answerText: "Cairo", isCorrect: true },
        { answerText: "Giza", isCorrect: false },
        { answerText: "New cairo", isCorrect: false },
      ],
    },
    {
      questionText: "what Bear is best?",
      answerOptions: [
        { answerText: "Brown Bear", isCorrect: false },
        { answerText: "Polar Bear", isCorrect: false },
        { answerText: "Black Bear", isCorrect: true },
        { answerText: "Panda", isCorrect: false },
      ],
    },
  ];
  const [currentQ, setcurrentQ] = useState(0);
  const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0)



  function handleAnswerButton(isCorrect){
    if (isCorrect){
      setScore(score +1 )
    }
    let nextQ = currentQ + 1 ;
    if (nextQ < questions.length){
      setcurrentQ(nextQ)
    } else{
      setShowScore(true)
    }
  }
  function handleResetbutton(){
    setScore(0)
    setShowScore(false)
    setcurrentQ(0)
  }



  return (
    <div className="App">
      {showScore ? (
        <>
        <div className="score-section">You Score {score} out{questions.length}</div>
        <button onClick={handleResetbutton}>Reset</button>
        </>
      ) : (
        <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1/</span>
              {questions.length}
            </div>
            <div className="question-text">
              {" "}
              {questions[currentQ].questionText}
            </div>
          </div>
          <div className="answers-section">
            {questions[currentQ].answerOptions.map((answerOption) => (
              <button onClick={() => {handleAnswerButton(answerOption.isCorrect)}}>{answerOption.answerText}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
