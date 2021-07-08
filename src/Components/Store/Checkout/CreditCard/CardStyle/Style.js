import { Container, Paper } from '@material-ui/core';
import styled from 'styled-components'
 
export const OuterContainer = styled(Container)`
/*    
    height: 300px;
    position: relative; */
`

export const FlipCard = styled.div`
  /* background-color: transparent;
  position: absolute;
  width: 100%;  
  height: 100%;
 
 
  
  perspective: 1000px;
  
  border-radius:18px;
  z-index:3; */
`
export const FlipCardInner = styled.div`
 position: relative;
 /* top:90px; */
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
 // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 
 ${({ focusCVC }) => {
    console.log(focusCVC);

    return (focusCVC && `
     transform: rotateY(180deg);
  `)
  }
  }
   
 
   

 
`

export const FlipCardFront = styled(Container)`
  background-color: #bbb;
  color: black;
    position: absolute;
   width: 100%;
   height: 100%;
   padding: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius:18px;
  z-index:3;
`

export const FlipCardBack = styled(Paper)`
  background: linear-gradient(0.25turn, #7b4397  , #dc2430);
  color: white;
  transform: rotateY(180deg);
    position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius:18px;
  
`


export const CardBackNameContainer = styled.div`
position:absolute;
 
  left:10%;
  top:30%;
  width: 80%;
  height: 50px;
  color:black;
  font-family: 'Rock Salt', cursive;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
background-color:#fff;
background-size: 64px 128px;
  font-weight:900;

  p:nth-of-type(1) {
  padding-left:3%;
}
p:nth-of-type(2) {
  padding-right:3%;
}
  
`
export const CardBackCVCContainer = styled.div`
position:absolute;
  background: #f0ebeb;
  right:10%;
  top:30%;
  width: 90px;
  height: 50px;
  color:black;
 
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const CardBackThank = styled.div`
 position:absolute;
 width:100%;
 bottom:10%;
 font-weight:600;
`


