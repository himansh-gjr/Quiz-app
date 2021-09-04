import { useContext, useState } from 'react';
import { UserContext } from '../../AppContext';
import Button from '../Button'
import { api } from '../../api/api';
import './WelcomeScreen.css'

function WelcomeScreen(){
    const [value,setValue] = useState('')
    const { setUser } = useContext(UserContext)

    const addUser = async () => {   
        try {
            let res = await api.post('/new-user', { name: value})
            let data = res.data;
            if(data === "User already exists !!"){
                alert("User already exists !!")
            }
            setUser(value)
        } catch (err) {
            console.log(err)
        }
    }

    const onInputChange = (e) =>
        setValue(e.target.value)

    const handleClick = ()=>{
        addUser()
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