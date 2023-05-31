import { useContext } from "react"
import SearcherContext from "@/context/SearcherContext"
import useSearcher from "@/hooks/useSearcher"

export default function Finder({ searcher, setSearcher }) {
  // const { finder, setFinder } = useContext(SearcherContext)
  const {finder} = searcher

  const handleChange = (e) => {
    setSearcher({...searcher, finder: e.target.value})
  }

  return (
    <input 
      className="searcher__input"
      type="text"
      value={finder}
      onChange={handleChange}
      placeholder="Search for a country..."
    />
  )
}