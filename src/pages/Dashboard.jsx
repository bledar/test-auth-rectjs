import React from "react"
import PropTypes from "prop-types";
import axios from "axios"

const API_URL = "http://appointments.draft2017.com/"

const Dashboard = (props) => {
    const handleGetAppointments = () => {

        // const config={
        //     headers:{
        //         Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkyODUyNzQ5LCJleHAiOjE1OTU0NDQ3NDl9.VEDjfTvpMZYYiZ5nrkKvr1prkr_Uoi0Mk4nflPVvFAI"
        //     }
        // }

        axios.get(API_URL + "appointments")
            .then((res) => {
                console.log("handleGetAppointments -> res", res)
            })
            .catch((err) => {
                console.log("handleGetAppointments -> err", err)
            })
    }

    return(
    <div>
            Dashboard
            <button onClick={handleGetAppointments}>GetAppoi</button>
    </div>
)}

Dashboard.propTypes = {
};
export default Dashboard;