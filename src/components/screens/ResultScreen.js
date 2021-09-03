import { useContext } from 'react';
import { UserContext } from '../../AppContext';
import Button from "../Button"
import './ResultScreen.css'

function ResultScreen({time,errors}){

    const { user,setUser } = useContext(UserContext)

    return (
        <div className="results--div"> 
            <div className="result--headings" >
                <h3>Name <p>{user}</p> </h3>
                <h3>ERRORS <p>{errors} </p> </h3>
                <h3>Quiz attempedAt  <p>{time.attempedAt.toString()}</p></h3>
                <h3>Quiz finishAt <p>{time.finishAt.toString()}</p></h3>
            </div>
            <Button children="Reset Quiz" onClick={()=>setUser('')} />
        </div>
    )
}

export default ResultScreen;