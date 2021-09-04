import { useState } from 'react';
import { UserContext } from './AppContext';
import Navbar from './components/Navbar/Navbar';
import QuestionScreen from './components/screens/QuestionScreen';
import WelcomeScreen from './components/screens/WelcomeScreen'

function App(){
    const [user,setUser] = useState('');

    return (
        <UserContext.Provider value={{user,setUser}} >
                <Navbar />
                    {
                        user === '' ? <WelcomeScreen /> : <QuestionScreen />
                    }
        </UserContext.Provider> 
    )
}

export default App;