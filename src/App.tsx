import './App.css'
import {Wrapper} from "./components/wrapper/Wrapper.tsx";
import {useEffect, useState} from "react";
import {CounterPanel} from "./components/CounterPanel.tsx";
import {SettingsPanel} from "./components/SettingsPanel.tsx";


function App() {

    useEffect(() => {

    }, []);

    const [count, setCount] = useState<number>(() => {
        let valueStartAsString = localStorage.getItem('count')
        return valueStartAsString ? JSON.parse(valueStartAsString) : 0
    })

    const [settingsOpen, setSettingsOpen] = useState<boolean>(() => {
        let valueSettingsOpen = localStorage.getItem('settingsOpen')
        return valueSettingsOpen ? JSON.parse(valueSettingsOpen) : 0
    })

    const [maxValueGl, setMaxValueGl] = useState<number>(() => {
        let valueMaxValueGl = localStorage.getItem('maxValueGl')
        return valueMaxValueGl ? JSON.parse(valueMaxValueGl) : 0
    })

    const [startValueGl, setStartValueGl] = useState<number>(() => {
        let valueStartValueGl = localStorage.getItem('startValueGl')
        return valueStartValueGl ? JSON.parse(valueStartValueGl) : 0
    })


    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count]);
    useEffect(() => {
        localStorage.setItem('startValueGl', JSON.stringify(startValueGl))
    }, [startValueGl]);
    useEffect(() => {
        localStorage.setItem('settingsOpen', JSON.stringify(settingsOpen))
    }, [settingsOpen]);
    useEffect(() => {
        localStorage.setItem('maxValueGl', JSON.stringify(maxValueGl))
    }, [maxValueGl]);


    function inc ()  {
        if (maxValueGl > startValueGl && (maxValueGl > -1 && startValueGl > -1)) {
            setCount(count + 1)
        }
    }

    function reset ()  {
        setCount(startValueGl)
    }

    function goToSettings ()  {
        setSettingsOpen(true)
    }

    function set (maxValue: number, startValue: number)  {
        setMaxValueGl(maxValue)
        setStartValueGl(startValue)
        setSettingsOpen(false)
        setCount(startValue)
    }

  return (
      <>
          <Wrapper className='app'>
              {settingsOpen
                            ? <SettingsPanel set={set} startValueGl={startValueGl} maxValueGl={maxValueGl}/>
                            : <CounterPanel count={count} goToSettings={goToSettings} inc={inc} reset={reset} maxValueGl={maxValueGl}/>}
          </Wrapper>
      </>

  )
}

export default App
