import { useContext, useState,useEffect } from 'react';
import { UserContext } from '../../AppContext';
import Button from '../Button'
import './WelcomeScreen.css'

function WelcomeScreen(){
    const [value,setValue] = useState('')
    const { setUser } = useContext(UserContext)

    const onInputChange = (e) =>
        setValue(e.target.value)

    const handleClick = ()=>{
        setUser(value)
    }

    return (
        <div style={{backgroundImage:`url('images/2401096.jpg')`}} className="welcome-screen" >
            <div className="welcome--input-div">
                <input value={value} placeholder="ENTER YOUR NAME" onChange={onInputChange} className='app-input'  />
            </div>
            <div className="welcome--btn-div" >
                <Button onClick={handleClick} children="Start Quiz" />
            </div>
        </div>
    )
}

export default WelcomeScreen;