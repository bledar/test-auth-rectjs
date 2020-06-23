import React,{useState} from "react"
import PropTypes from "prop-types";

const LoginForm = ({ handleLogin }) => {
    const [identifier, setIdentifier] = useState("bledar")
    const [password, setPassword] = useState("123456")

    const handleSubmit=(e)=>{
        e.preventDefault()
        //* Te dhenat e formes qe do pedoren per tu loguar. Kalojne tek parenti qe eshte Login page
        const data = {
            identifier: identifier,
            password: password
        }

        handleLogin(data)
    }

    return(
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="identifier" value={identifier} onChange={(e)=>{setIdentifier(e.target.value)}} />
        </div>

        <div>
            <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>

        <button type="submit">Login</button>
    </form>
)}

LoginForm.propTypes = {
};
export default LoginForm;