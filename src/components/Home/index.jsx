import { Helmet } from "react-helmet"
import Searcher from "@/components/Searcher"
import Countries from "@/components/Countries"
import { useEffect, useState } from "react"

export default function Home ({ countries, setShowDetail, searcher, setSearcher}) {
  if (!countries) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Helmet>
        <title>Home | Country App</title>
      </Helmet>

      <Searcher searcher={searcher} setSearcher={setSearcher} />
      <Countries countries={countries} setShowDetail={setShowDetail} searcher={searcher} />
    </>
  )
}