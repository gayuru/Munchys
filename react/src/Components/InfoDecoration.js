//Template.js
///////////////////////////////
//React & Material
import React from 'react';

//Plugins
import styled from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useHistory,Link } from "react-router-dom";
import Bowl from '../media/icons/bowl.svg';
import Luck from '../media/icons/luck.svg';
import Developer from '../media/icons/developer.svg';
import Made from '../media/icons/made.svg';
//Component Imports

//////////////////////////////
//Styled components
const FixedContainer = styled(Container)`
width: 290px;
height: 186px;
`
const CustomColumn = styled(Col)`
background: ${props => props.background};
border-radius: ${props => props.radius};
width: 145px;
height: 140px;
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

const ColText = styled.h2`
font-weight: bold;
font-size: 17px;
text-align: center;
color: #000000;
margin-top:10px;
`


//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function InfoDecoration(props) {

  let history = useHistory();

  return (
    <FixedContainer fluid>
      <Row>
        <CustomColumn background="#FFC0BE" radius="0px 50px 0px 0px">
        <Link to="/about-us">
          <Image src={Developer} fluid />
          <ColText>
            About us
        </ColText>
        </Link>
        </CustomColumn>
        <CustomColumn background="#D3F8E2" radius="50px 0px 0px 0px">
        <Link to="/saved-recipes">
          <Image src={Bowl} fluid />
          <ColText>
            Saved Recipes
          </ColText>
          </Link>
        </CustomColumn>
      </Row>
      <Row>
        <CustomColumn background="#EDE7B1" radius="0px 0px 0px 50px">
          <Link to="/taste-your-luck">
          <Image src={Luck} fluid />
          <ColText>
            Taste your Luck
           </ColText>
          </Link>
          
        </CustomColumn>
        <CustomColumn background="#7F95D1" radius="0px 0px 50px 0px">
        <Link to="/recommended">
          <Image src={Made} fluid />
          <ColText>
            Made for you
          </ColText>
          </Link>
        </CustomColumn>
      </Row>
    </FixedContainer>
  )
}
export default InfoDecoration;