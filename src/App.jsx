import { useState } from 'react'

import Countries from '@/components/Countries'
import Detail from '@/components/Detail'
import NavBar from '@/components/NavBar'
import Searcher from '@/components/Searcher'

import { CountriesProvider } from '@/context/CountriesContext'
import { SearcherProvider } from '@/context/SearcherContext'

import './App.css'

function App() {
  const [showDetail, setShowDetail] = useState([false, ""])

  return (
    <>
    <footer>
      <NavBar setShowDetail={setShowDetail} />
    </footer>

    <CountriesProvider>
      <SearcherProvider>
        <main className='container'>
        {
          showDetail[0] 
            ? <Detail country={showDetail[1]} setShowDetail={setShowDetail} />
            : <>
              <Searcher />
              <Countries setShowDetail={setShowDetail} />
              </>          
        }
        </main>
      </SearcherProvider>
    </CountriesProvider >
    </>
  )
}

export default App