import React, { useState, useEffect } from 'react'
import { DivTemporizer, CounterBox, Span, CosaRara1, CosaRara2 } from '../styled/TemporizerContainer'

const TemporizerContainer = () => {
  const [counter, setCounter] = useState({
    state: false,
    segundos: 0,
    minutos: 0,
    horas: 0,
    dias: 14
  })

  useEffect(() => {
    let interval = setInterval(() => {
      validation()
      counterTemporizer()
    }, 1000);
    document.title = `${counter.dias}:${counter.horas}:${counter.minutos}:${counter.segundos}`
    return () => clearInterval(interval)
  }, [counter])

  const counterTemporizer = () => {
    setCounter({
      ...counter,
      segundos: counter.segundos - 1
    })
    if (counter.segundos <= 1) {
      setCounter({
        ...counter,
        segundos: 59,
        minutos: counter.minutos - 1
      })
    }
    if (counter.minutos <= 1 && counter.segundos <= 1) {
      setCounter({
        ...counter,
        segundos: 59,
        minutos: 59,
        horas: counter.horas - 1
      })
    }
    if (counter.horas <= 1 && counter.minutos <= 1 && counter.segundos <= 1) {
      setCounter({
        ...counter,
        segundos: 59,
        minutos: 59,
        horas: 23,
        dias: counter.dias - 1
      })
    }
    localStorage.getItem('timeCounter', JSON.stringify())
  }

  const validation = () => {
    if(localStorage.getItem('timeCounter') === null ){
      setCounter({
        ...counter,
        state: true,
      })
      localStorage.setItem('timeCounter', JSON.stringify(counter))
    }
    else{
      const setItem = JSON.parse(localStorage.getItem('timeCounter'))
      setCounter({
        ...counter,
        segundos: setItem.segundos,
        minutos: setItem.minutos,
        horas: setItem.horas,
        dias: setItem.dias
      })
      localStorage.setItem('timeCounter', JSON.stringify(counter))
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