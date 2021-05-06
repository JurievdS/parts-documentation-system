import react from "react"
import Message from "../components/Message";


export const loginErrorHelper = (error) => {
    
        if (error.username && error.password && error.accpountStatus){
            return(
                <Message variant="danger">{error.username}</Message>
                <Message variant="danger">{error.username}</Message>
                <Message variant="danger">{error.username}</Message>



            )
        }

}