import React, {useState, useContext} from 'react'
import questions from './data'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [getQuestions, setGetQuestions] = useState(questions)
    const [toggle, setToggle] = useState(false)
    const [clicked, setClicked] = useState(false)
    return(
        <AppContext.Provider
            value={{
                getQuestions, setGetQuestions, toggle,setToggle
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