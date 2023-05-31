import Finder from "./Finder.jsx"
import Filter from "./Filter.jsx"
// import useSearcher from "@/hooks/useSearcher.js"
import "./index.css"

export default function Searcher({ searcher, setSearcher }) {
  // const options = [...document.querySelectorAll('#region-select option')]

  // options.forEach(el => {
  //   // console.log(el.selected)
  //   if (el.selected) el.selected = false
  //   if (el.value === searcher.filter) {
  //     el.selected = true
  //     console.log(searcher.filter)
  //   }
  // })
  return (
    <section className="searcher">
      <Finder searcher={searcher} setSearcher={setSearcher} />
      <Filter searcher={searcher} setSearcher={setSearcher} />
    </section>
  )
}