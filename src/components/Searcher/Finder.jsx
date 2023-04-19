import { useContext } from "react"
import SearcherContext from "@/context/SearcherContext"
import useSearcher from "@/hooks/useSearcher"

export default function Finder() {
  const { finder, setFinder } = useContext(SearcherContext)

  return (
    <input 
      className="searcher__input"
      type="text"
      value={finder}
      onChange={(e) => setFinder(e.target.value)}
      placeholder="Search for a country..."
    />
  )
}