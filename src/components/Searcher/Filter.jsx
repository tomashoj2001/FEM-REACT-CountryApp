// import { useContext } from "react"
// import SearcherContext from "@/context/SearcherContext"

import { useEffect } from "react"

// import { useEffect } from "react"

export default function Filter({ searcher, setSearcher}) {
  // const { setFilter } = useContext(SearcherContext)
  
  const options = [...document.querySelectorAll('#region-select option')]
  useEffect(() => {
    options.forEach(el => {
      // console.log(el.selected)
      if (el.selected) el.selected = false
      if (el.value === searcher.filter) el.selected = true
    })
  }, [searcher])
  
  const handleClick = (e) => setSearcher({...searcher, filter: e.target.value})
   
  return (
    <select onChange={handleClick} name="region-select" id="region-select">
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}