import React, { useState, useEffect } from 'react'
import { DivTemporizer, CounterBox, Span, CosaRara1, CosaRara2 } from '../styled/TemporizerContainer'

const TemporizerContainer = () => {
  const [counter, setCounter] = useState({
    state: false,
    segundos: 0,
    minutos: 0,
    horas: 0,
    dias: 0
  })
  useEffect(() => {
    localStorage.setItem('stateTemporizer', JSON.stringify({counter}))
    counterTemporizer()
  })

  const counterTemporizer = ()=>{
    const stateTemporizer = JSON.parse(localStorage.getItem('stateTemporizer'))
    if(stateTemporizer.state === false){
      setCounter({ 
        ...counter,
        state:true
      })
    }
    else{
      setInterval(()=>{
        setCounter({
          ...counter,
          segundos: counter.segundos + 1
        })
        localStorage.setItem('stateTemporizer', JSON.stringify(counter))
      }, 1000)
    }
  }

  return (
    <DivTemporizer>
      <CounterBox><CosaRara1></CosaRara1><Span>{counter.dias}</Span><CosaRara2></CosaRara2></CounterBox>
      <CounterBox><CosaRara1></CosaRara1><Span>{counter.horas}</Span><CosaRara2></CosaRara2></CounterBox>
      <CounterBox><CosaRara1></CosaRara1><Span>{counter.minutos}</Span><CosaRara2></CosaRara2></CounterBox>
      <CounterBox><CosaRara1></CosaRara1><Span>{counter.segundos}</Span><CosaRara2></CosaRara2></CounterBox>
    </DivTemporizer>
  )
}

export default TemporizerContainer