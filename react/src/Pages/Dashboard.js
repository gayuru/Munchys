//Dashboard.js
///////////////////////////////
//React & Material
import React, {useEffect,useState} from 'react';

//Plugins
import styled from 'styled-components';
import {Container,Row,Image, Col} from 'react-bootstrap';
import logo from '../media/logo-coloured.svg'

//Component Imports

//////////////////////////////
//Styled components
const FullHeightContainer = styled(Container)`
  // height:100vh;
  // border-style: solid;
  // border-color: #36FFC1;
`
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
margin-left:20vw;
font-weight: bold;
font-size: 8em;
line-height: 156px;
/* identical to box height */
color: #7F95D1;
display:block;
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
//////////////////////////////
//Dashboard class
/**
 * Displays a template component
 */
function Dashboard(props) {
  const [currentTime,setCurrentTime] = useState(0);


  return (
  <Container>
    <Row>
    <Logo src={logo}/>
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
      <Subline>
      Lorem ipsum dolor sit amet, <Blue>consectetur</Blue> adipiscing<br/>
       elit, sed do eiusmod tempor incididunt ut labore et<br/> 
       dolore magna aliqua. <Blue>Ut enim</Blue> ad minim veniam,<br/>
        quis nostrud exercitation ullamco laboris <Blue>nisi ut.</Blue>
      </Subline>
    </TextBox>
    </CustomRow>
  </Container>
  )
}
export default Dashboard;