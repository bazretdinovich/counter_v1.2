import './App.css'
import {Wrapper} from "./components/wrapper/Wrapper.tsx";
import {useState} from "react";
import {CounterPanel} from "./components/CounterPanel.tsx";
import {SettingsPanel} from "./components/SettingsPanel.tsx";


function App() {

    const [count, setCount] = useState<number>(0)
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)

    function inc ()  {
        setCount(count + 1)
    }

    function reset ()  {
        setCount(0)
    }

    function goToSettings ()  {
        setSettingsOpen(true)
    }

    function set ()  {
        setSettingsOpen(false)
    }

  return (
      <>
          <Wrapper className='app'>
              {settingsOpen
                            ? <SettingsPanel set={set}/>
                            : <CounterPanel count={count} goToSettings={goToSettings} inc={inc} reset={reset}/>}
          </Wrapper>


      </>

  )
}

export default App
