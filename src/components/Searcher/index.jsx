import Finder from "./Finder.jsx"
import Filter from "./Filter.jsx"
import useSearcher from "@/hooks/useSearcher.js"
import "./index.css"

export default function Searcher() {
  useSearcher()

  return (
    <section className="searcher">
      <Finder />
      <Filter />
    </section>
  )
}