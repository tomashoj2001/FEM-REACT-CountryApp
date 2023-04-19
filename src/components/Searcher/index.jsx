import Finder from "./Finder.jsx"
import Filter from "./Filter.jsx"
import "./index.css"
import useSearcher from "@/hooks/useSearcher.js"

export default function Searcher() {
  useSearcher()

  return (
    <section className="searcher">
      <Finder />
      <Filter />
    </section>
  )
}