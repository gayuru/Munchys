//Template.js
///////////////////////////////
//React & Material
import React, { useState } from 'react';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';
//Plugins
import styled from 'styled-components';
import Banner from '../media/banner.svg';
import heart from '../media/heart.svg';
import logo from '../media/logo-coloured.svg';
import GridGenerator from '../Components/GridGenerator';

import Recipe from '../Components/SingleRecipe'

//////////////////////////////
//Styled components
const Logo = styled(Image)`
  margin-top:3vh;
  margin-bottom:4vh;
  float:left;
`
const Heart = styled(Image)`
float:right;
margin-top:5vh;
`
const IngredientText = styled.h2`
font-size: 38px;
margin-top:2vh;
`
const BadgeCustom = styled(Badge)`
padding: 1vw 3vw 1vw 3vw;
margin-left:2vw;
background: #FFC0BE;
color: #000000;
font-size: 20px;
font-style: normal;
font-weight: normal;
`
const RecipeHeading = styled.h2`
margin-top:2vh;
font-style: normal;
font-weight: bold;
font-size: 43px;
line-height: 65px;
letter-spacing: -0.025em;
color: #7F95D1;
`

const CustomRow = styled(Row)`
margin-top:3vh;
height:100vh;
`
const Spacer = styled.div`
  height: ${props => props.height};
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function RecipePage(props) {

  const [recipeData, setrecipeData] = useState(props.location.state.data[1]);
  const [ingredients,setIngredients] = useState(props.location.state.data[0])

  function renderIngredients(){
    return (
      ingredients.map((i) =>
      <BadgeCustom pill variant="primary">
      {i.IngredientName}
      </BadgeCustom>
      )
    )
  }

  function renderRecipes(){
    return (
      recipeData.map((x) =>
      <div>
       <Recipe data={x}/>{console.log(x)}
      </div>
      )
    )
  }

 
  return (
  <Container>
    <Row>
      <Col>
      <Logo src={logo}/>
      </Col>
      <Col>
      <Heart src={heart}/>
      </Col>
    </Row>
    <Row>
    <Image src={Banner} fluid/>
    </Row>
    <Row>
    <IngredientText>
        Ingredients Chosen {renderIngredients()}
        {console.log(recipeData)}
    </IngredientText>
    </Row>
    <Row>
      <RecipeHeading>
      Recipes generated
      </RecipeHeading>
    </Row>
    <Spacer height="3vh" />
      <GridGenerator cols={3}>
        {recipeData.length ? renderRecipes(): null}
      </GridGenerator>
  </Container>
  )
}
export default RecipePage;