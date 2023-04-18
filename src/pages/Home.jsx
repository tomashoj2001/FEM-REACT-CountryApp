import { Helmet } from "react-helmet"
import Searcher from "@/components/Searcher"
import Countries from "@/components/Countries"

export default function Home () {
  return (
    <>
      <Helmet>
        <title>Home | Country App</title>
      </Helmet>

      <Searcher />
      <Countries />
    </>
  )
}