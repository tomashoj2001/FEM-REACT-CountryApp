import React, { useState } from "react"

const Context = React.createContext({})

export function SearcherProvider ({children}) {
  const [filter, setFilter] = useState("")
  const [finder, setFinder] = useState("")
  console.log('search-provider')
  return <Context.Provider value={{filter, setFilter, finder, setFinder}}>{children}</Context.Provider>
}

export default Context