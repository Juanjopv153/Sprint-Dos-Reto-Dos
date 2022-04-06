import styled from 'styled-components'

const DivFooter = styled.div`
    width: 100%;
    background-image: url('https://res.cloudinary.com/nohay/image/upload/v1648606756/sprintDos/RetoDos/ekxupo0li2mjhacokrhk.svg');
    padding: 120px 0 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: -0%;
    gap: 40px;

    img{
        cursor: pointer;
    }
    img:active{
        filter: invert(83%) sepia(23%) saturate(4448%) hue-rotate(303deg) brightness(92%) contrast(119%);
    }
`
export {DivFooter}