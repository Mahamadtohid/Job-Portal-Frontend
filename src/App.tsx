import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MantineProvider } from '@mantine/core'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider> 
        <h1> Hello World !!!</h1>  
      </MantineProvider>
    </>
  )
}

export default App
