//Dashboard.js
///////////////////////////////
//React & Material
import React, {useEffect,useState} from 'react';

//Plugins
import styled from 'styled-components';
import {Container,Row,Image, Col} from 'react-bootstrap';
import logo from '../media/logo-coloured.svg'
import backgroundImage from '../media/background.jpg'
import Typing from 'react-typing-animation';
//Component Imports

//////////////////////////////
//Styled components

const Logo = styled(Image)`
  margin-top:3vh;
`
const MainText = styled.text`
font-size: 5em;
margin-left:5vw;
text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.28);
display:block;
`
const SubText = styled.span`
font-style: italic;
margin-left:25vw;
font-weight: bold;
font-size: 8em;
line-height: 156px;
/* identical to box height */
color: #7F95D1;
display:block;
z-index:1;
`

const CustomRow = styled(Row)`
  margin-top:${props => props.top};
`

const TextBox = styled.div`
  margin-left:5vw;
  border-left:3px solid #7F95D1;
  padding:10px 10px 10px 15px;
`
const Subline = styled.p`
line-height: 23px;
text-align: justify;
`
const Blue = styled.span`
font-weight: bold;
color: #7F95D1;
`
const Graphic = styled.div`
position: absolute;
width: 606px;
height: 1012px;
    top: 0px;
    right: 0px;
z-index:-1;
background: url(${backgroundImage})100% no-repeat;
background-size: cover;
    background-position: center; 
box-shadow: 1px -7px 53px rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 0px 141px;
`
//////////////////////////////
//Dashboard class
/**
 * Displays a template component
 */
function HomePage(props) {
  const [currentTime,setCurrentTime] = useState(0);

  useEffect(() => { 
    document.body.style.backgroundColor = '#FFF5F5'
   }, []) 

  return (
  <Container>
    <Row>
    <Logo src={logo}/>
    <Graphic/>
    </Row>
    <CustomRow top="10vh">
   
    <MainText>
    Every Day is <br/>
    </MainText>
    <SubText>
    Tastyyyy
    </SubText>

    </CustomRow>
    <CustomRow top="15vh">
    <TextBox>
    <Typing speed={50}>
      <Subline>
      Lorem ipsum dolor sit amet, <Blue>consectetur</Blue> adipiscing<br/>
       elit, sed do eiusmod tempor incididunt ut labore et<br/> 
       dolore magna aliqua. <Blue>Ut enim</Blue> ad minim veniam,<br/>
        quis nostrud exercitation ullamco laboris <Blue>nisi ut.</Blue>
      </Subline>
      </Typing>
    </TextBox>
    </CustomRow>
  </Container>
  )
}
export default HomePage;