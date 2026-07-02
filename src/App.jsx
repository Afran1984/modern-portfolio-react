import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Calendar } from './components/ui/calendar'

function App() {
  const [count, setCount] = useState(0)

  // const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [date, setDate] = useState(new Date())


  return (
    <>
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    </div>
    </>
  )
}

export default App
