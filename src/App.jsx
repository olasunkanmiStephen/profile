import { useState } from 'react'
import Left from './Component/Left'
import Right from './Component/Right'
import "./Component/css/Toggle.css"


function App() {
  const [IsDayMode, setIsDayMode] = useState(false)

  const handleToggleChange = () => {
    setIsDayMode(prevMode => !prevMode);
  }

  return (
    <div className="main-container">
      <div className="containers">
        <Left IsDayMode={IsDayMode} />
        <Right IsDayMode={IsDayMode} />
      </div>
    </div>
  )
}

export default App
