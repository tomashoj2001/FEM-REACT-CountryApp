import Finder from "./Finder.jsx"
import Filter from "./Filter.jsx"
import "./index.css"

export default function Searcher() {
  return (
    <section className="searcher">
      <Finder />
      <Filter />
    </section>
  )
}