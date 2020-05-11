//Dashboard.js
///////////////////////////////
//React & Material
import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Typing from 'react-typing-animation';
//Plugins
import styled from 'styled-components';
import InfoDecoration from '../Components/InfoDecoration';
import IngredientSection from '../Components/IngredientSection';
import backgroundImage from '../media/background.jpg';
import logo from '../media/logo-coloured.svg';

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
const InfoRow = styled(Row)`
  margin-top:${props => props.top};
  float:left;
  margin-left:5vw;
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
  

  return (
    <Container>
      <Row>
          <Link to="/home">
            <Logo src={logo} />
          </Link>
        <Graphic />
      </Row>
      <CustomRow top="10vh">
        <MainText>
          Every Day is <br />
        </MainText>
        <SubText>
          Tastyyyy
    </SubText>

      </CustomRow>
      <CustomRow top="15vh">
        <TextBox>
          <Typing speed={20}>
            <Subline>
              Lorem ipsum dolor sit amet, <Blue>consectetur</Blue> adipiscing<br />
       elit, sed do eiusmod tempor incididunt ut labore et<br />
       dolore magna aliqua. <Blue>Ut enim</Blue> ad minim veniam,<br />
        quis nostrud exercitation ullamco laboris <Blue>nisi ut.</Blue>
            </Subline>
          </Typing>
        </TextBox>
      </CustomRow>
      <InfoRow top="10vh">
        <InfoDecoration />
      </InfoRow>
      <CustomRow top="40vh">
      <IngredientSection/>
      </CustomRow>

    </Container>
  )
}
export default HomePage;