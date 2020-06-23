import React from "react"
import PropTypes from "prop-types";
import axios from "axios"
import { useHistory } from "react-router-dom";
import LoginForm from "../LoginForm";

const Login = ({login}) => {
    const history = useHistory();
    const API_URL ="http://appointments.draft2017.com/"

    const handleLogin=(data)=>{
        //AJAX
        axios.post(API_URL +"auth/local",data)
            .then((res)=>{
                console.log("handleLogin res", res.data.jwt)
                login(res.data)
                history.push("/dashboard")
            })
            .catch((err=>{
                console.log("handleLogin err", err)
            }))
    }

    

    return (
    <div>
        <LoginForm handleLogin={handleLogin} />
    </div>
)};
Login.propTypes = {
};
export default Login;