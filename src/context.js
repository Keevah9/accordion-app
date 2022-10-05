import React, {useState, useContext} from 'react'
import questions from './data'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [getQuestions, setGetQuestions] = useState(questions)
    const [toggle, setToggle] = useState(false)
    const [btn,setBtn] = useState(false)
    const showtoggle = ()=>{

    }
    return(
        <AppContext.Provider
            value={{
                getQuestions, setGetQuestions, toggle,setToggle, btn
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGeneralContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}