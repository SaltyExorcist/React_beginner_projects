import './App.css'
import { CardOne } from './components/cardOne' 

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black p-4
      rounded-xl mb-4">Tailwind Test</h1>
      <CardOne username="SaltyExorcist"/>
      <CardOne username="Eddie"/>
    </>
  )
}

export default App
