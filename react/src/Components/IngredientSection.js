//Template.js
///////////////////////////////
//React & Material
import React from 'react';

//Plugins
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

//Component Imports

//////////////////////////////
//Styled components
const HeadingText = styled.h2`
font-size: 45px;
`
const Decoration = styled.div`
margin-top:1vh;
background-color: #F7AF9D;
border: 3px solid #F7AF9D;
width: 83px;
// height: 4px;
`
const CustomContainer = styled(Container)`
height:300vh;
`

const PopularText = styled.h2`
margin-top:4vh;
font-weight: bold;
font-size: 39px;
line-height: 52px;
color: #FFAEAB;
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function IngredientSection(props) {

  const exampleFunction = () => {
    return "My example";
  }

  return (
  <CustomContainer>
    <Row>
      <HeadingText>
        Select your ingredients
      </HeadingText>
    </Row>
    <Row>
      <Decoration/>
    </Row>
    <Row>
      <PopularText>
        Popular
      </PopularText>
    </Row>
  </CustomContainer>
  )
}
export default IngredientSection;