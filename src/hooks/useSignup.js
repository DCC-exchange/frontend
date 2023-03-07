import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () =>{
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const { dispatch } = useAuthContext()

    const signup = ( async (username,email, password)=>{
            setIsLoading(true)
            setError(null)

            const response = await fetch('https://dccexchange.herokuapp.com/api/users/signup', {
                method: "POST",
                body: JSON.stringify({username, email, password }),
                headers: {
                    "Content-type" : "application/json"
                }               
            })



            const json = await response.json()
            if(!response.ok){
                setIsLoading(false)
                setError(json.error)
            }
            if(response.ok){
                // Save user to localStorage
                localStorage.setItem('user', JSON.stringify(json))
                // Update the auth context
                dispatch({ type: "LOGIN" , payload: json})
    
            }
    })
    return { signup, isLoading, error}
}



