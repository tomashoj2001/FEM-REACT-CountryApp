import { useState } from 'react'

import { CountriesProvider } from '@/context/CountriesContext'
import { SearcherProvider } from '@/context/SearcherContext'

import NavBar from '@/components/NavBar'
import Home from '@/components/Home'
import Detail from '@/components/Detail'

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
              : <Home setShowDetail={setShowDetail} />
          }
        </main>

      </SearcherProvider>
    </CountriesProvider >
    </>
  )
}

export default App