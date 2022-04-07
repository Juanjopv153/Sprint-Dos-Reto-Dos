import styled from 'styled-components'

const DivTemporizer = styled.div`
    display: flex;
    gap: 30px;
`
const CounterBox = styled.div`
    font-size: 30px;
    overflow: hidden;
    width: 200px;
    height: 200px;
    background: linear-gradient(to bottom,hsl(234, 17%, 12%) 49%, black 1% ,hsl(236, 21%, 26%) 50% );
    border-radius:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    box-shadow: 0px 6px 10px black;
`

const Span = styled.span`
     color: red;
     text-align: center;
     font-size: 125px;
     margin: auto;
`

const CosaRara1 = styled.div`
    width: 20px;
    height: 20px;
    background-color: black;
    position: absolute;
    right: 95%;
    border-radius: 50px;
`

const CosaRara2 = styled.div`
width: 20px;
height: 20px;
border-radius: 50px;
left: 95%;
background-color: black;
position: absolute;
`


export {DivTemporizer, CounterBox, Span, CosaRara1, CosaRara2 }