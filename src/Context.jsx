import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [isBarClicked, setIsBarClicked] = useState(false)

    function clickNav() {
        setIsBarClicked(prev => !prev)
    }

    return (
        <Context.Provider value={{
            isBarClicked,
            clickNav
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}