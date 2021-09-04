import './Button.css'

function Button({ children,onClick }){

    return (
            <button onClick={onClick} className="app-btn">{children}</button>
    )
}

export default Button;