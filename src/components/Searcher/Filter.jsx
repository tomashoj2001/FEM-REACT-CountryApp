import { useContext } from "react"
import SearcherContext from "@/context/SearcherContext"

export default function Filter() {
  const { setFilter } = useContext(SearcherContext)

  const handleClick = (e) => setFilter(e.target.value)
   
  return (
    <select onClick={handleClick} name="region-select" id="region-select">
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}