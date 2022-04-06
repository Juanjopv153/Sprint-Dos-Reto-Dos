import styled, {createGlobalStyle} from 'styled-components'
createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300&display=swap');
`
const DivApp = styled.div`
height: 200px;
margin: 10% auto 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20%;
`

const H1 = styled.h1`
    width: 75%;
    margin: 0 auto 0 auto;
    text-align: center;
    color:white;
    font-family:'Red Hat Text', "Comic Sans";
    font-size: 25px;
    -webkit-text-fill-color:tranparent;
    background-clip: text;
`

export { DivApp, H1, createGlobalStyle }