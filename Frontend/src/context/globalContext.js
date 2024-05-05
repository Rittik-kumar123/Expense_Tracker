import React, { useContext, useState } from "react";
import axios from 'axios'

const GlobalContext = React.createContext();

const BASE_URL= "http://localhost:5000/api/v1/"

export const GlobalProvider = ({children}) => {
    const [incomes,setIncome] = useState([])
    const [expenses,setExpenses] = useState([])
    const [error,setError] = useState(null)

    //Income ko database me add karne ka code likh rahe hai
    const addIncome = async(income) => {
        const response = await axios.post(`${BASE_URL}add-income`,income)
        .catch((err)=>{
            setError(err.response.data.message)
        })
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncome(response.data)
        console.log(response.data)
    }
    
    return(
        <GlobalContext.Provider value={{addIncome,getIncomes,incomes }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}