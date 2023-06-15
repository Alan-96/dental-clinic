import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './router/Navigation'

const App:FC = () => {
  return (
    <BrowserRouter>
    <Navigation/>
    </BrowserRouter>
  )
}

export default App