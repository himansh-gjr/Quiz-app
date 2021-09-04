import { useContext, useEffect, useState } from 'react';
import { api } from '../../api/api';
import { UserContext } from '../../AppContext';
import Button from "../Button"
import './ResultScreen.css'

function ResultScreen({time,errors}){
    const [userData,setUserData] = useState(null)
    const { user,setUser } = useContext(UserContext)

    useEffect(()=>{
        async function addScores(){
            try {
                let res = await api.patch('/add-results', { name: user,newScore:{attempedAt:time.attempedAt.toString(),errors,finishAt:time.finishAt.toString()}})
                if(res.data === "User don't exists !!"){
                    alert("User don't exists !!")
                    return;
                }
                setUserData(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        addScores()
    },[user,time,errors])

    function handleResetClick() {
        window.location.reload(false);
        setUser('')
      }


    return (
        <div className="results--div"> 
            <Button children="Reset Quiz" onClick={handleResetClick} />
            <div className="result--headings" >
                {
                    userData && (
                        <>
                            <h3>Name <p>{user}</p> </h3>
                            {
                                userData.scores.map((s,idx)=>{  
                                    const score = JSON.parse(s);
                                    return(                                
                                    <div key={idx} className="result--container">
                                        <h3>ERRORS <p>{ score.errors} </p> </h3>
                                        <h3>Quiz attempedAt  <p>{score.attempedAt.toString()}</p></h3>
                                        <h3>Quiz finishAt <p>{score.finishAt.toString()}</p></h3>
                                    </div>)
                                })
                            }
                           
                        </>
                    )
                }
               
            </div>
        </div>
    )
}

export default ResultScreen;