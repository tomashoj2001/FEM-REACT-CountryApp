import React, { useState } from "react"

const Context = React.createContext({})

export function CountriesProvider ({children}) {
  const [globalCountries, setGlobalCountries] = useState([])
  const [countries, setCountries] = useState([])

  // return (
    // <Context.Provider value={{globalCountries, setGlobalCountries, countries, setCountries}}>{children}</Context.Provider>
  // )  
}

export default Context