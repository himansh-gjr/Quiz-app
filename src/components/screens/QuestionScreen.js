import { useEffect, useState } from "react";
import Button from "../Button";
import { QUESTIONS } from "../Data/questions"
import './QuestionScreen.css'
import ResultScreen from "./ResultScreen";

function QuestionScreen(){   
    const [currQuestion,setCurrQuestion] = useState(0)
    const [errors,setErrors] = useState(0)
    const [time,setTime] = useState({attempedAt: '',finishAt:''})
    const [showScore,setShowScore] = useState(false)

    useEffect(()=>{
        let newTime = time
        newTime.attempedAt = new Date()
        setTime(newTime)
    },[])

    const handleButtonClick = (opt) =>{

        if( opt === QUESTIONS[currQuestion].answer){
            if( currQuestion === 4 ){
                let newTime = time
                newTime.finishAt = new Date()
                setTime(newTime)
                setShowScore(true)
                return;
            }
            let nextQuest = currQuestion + 1
            setCurrQuestion(nextQuest)
        } 
        else{
            let error = errors + 1
            setErrors(error)
        } 
    }

    return (
        <div className="questions-screen">
            {
                showScore ? <ResultScreen time={time} errors={errors} /> : 
                (   <>
                        <h2 className="question--heading" > {QUESTIONS[currQuestion].question} </h2>
                        <div className="question---div">
                            <div className="image--div">
                                <img alt="animal" className="question--image" src={QUESTIONS[currQuestion].image} />
                            </div>
                            <div className="options" >
                            {
                                QUESTIONS[currQuestion].options.map((opt,idx)=>(
                                    <Button key={idx} onClick={() => handleButtonClick(opt)} children={opt} />
                                ))
                            }
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default QuestionScreen;