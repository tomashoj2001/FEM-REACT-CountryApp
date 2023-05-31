import { useEffect } from "react"

export default function Filter({ searcher, setSearcher}) {  
  useEffect(() => {
    const options = [...document.querySelectorAll('#region-select option')]
    options.forEach(el => {
      if (el.selected) el.selected = false
      if (el.value === searcher.filter) el.selected = true
    })
  }, [searcher])
  
  const handleChange = (e) => setSearcher({...searcher, filter: e.target.value})
   
  return (
    <select onChange={handleChange} name="region-select" id="region-select">
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}