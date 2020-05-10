//Template.js
///////////////////////////////
//React & Material
import React from 'react';

//Plugins
import styled from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useHistory,Link } from "react-router-dom";
import Icon from '../media/icon.svg'
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
height: 120px;
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

const ColText = styled.h2`
font-weight: bold;
font-size: 17px;
text-align: center;
color: #000000
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
          <Image src={Icon} fluid />
          <ColText>
            My Profile
        </ColText>
        </CustomColumn>
        <CustomColumn background="#D3F8E2" radius="50px 0px 0px 0px">
        <Link to="/saved-recipes">
          <Image src={Icon} fluid />
          <ColText>
            Saved Recipes
          </ColText>
          </Link>
        </CustomColumn>
      </Row>
      <Row>
        <CustomColumn background="#EDE7B1" radius="0px 0px 0px 50px">
          <Link to="/taste-your-luck">
          <Image src={Icon} fluid />
          <ColText>
            Taste your Luck
           </ColText>
          </Link>
          
        </CustomColumn>
        <CustomColumn background="#7F95D1" radius="0px 0px 50px 0px">
        <Link to="/recommended">
          <Image src={Icon} fluid />
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