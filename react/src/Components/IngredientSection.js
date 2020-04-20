//Template.js
///////////////////////////////
//React & Material
import React,{useCallback,useState} from 'react';

//Plugins
import styled from 'styled-components';
import { Container, Row,Image } from 'react-bootstrap';
import GridGenerator from './GridGenerator';

import Food from '../media/food.svg';

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
text-align:left;
line-height: 52px;
color: #FFAEAB;
`

const FoodText = styled.h2`
margin-top:2vh;
font-size: 32px;
text-align:center;
`

const Spacer = styled.div`
  height: ${props => props.height};
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function IngredientSection(props) {

  const [showResults, setShowResults] = useState(false)
  const [selectedIngredients, setSelectedIngredients] = useState([])

  function getFoodItem(food){

    console.log(food);

    // showResults ? setShowResults(false) : setShowResults(true)

    const index = selectedIngredients.indexOf(food)
    // setPlantColor("#16FFD0")
    if (index === -1) {
      const ingredients = [...selectedIngredients, food]; // new array need to update
      setSelectedIngredients(ingredients); // update the state
      // setshowButton(true)
    } else {
      const filteredItems = selectedIngredients.filter(item => item !== food)
      setSelectedIngredients(filteredItems)
    }

  }
 
  const Ingredient = (name,picture) => {
    return (
        <div onClick={()=> getFoodItem(name)}>
        <Image src={Food}/>
        <FoodText>
         {name}
         {  selectedIngredients.includes(name) ? " ✅" : null }
        </FoodText>
        </div>
    )
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
    <Spacer height="3vh"/>
    <GridGenerator cols={4}>
      {Ingredient("Rice","LOL")}
      {Ingredient("Curry","LOL")}
      {Ingredient("Toast","LOL")}
      {Ingredient("Wrap","LOL")}
      {Ingredient("Bread","LOL")}
      {Ingredient("Rice","LOL")}
    </GridGenerator>
    <Row>
      <PopularText>
        Quick <br/> Ingredients
      </PopularText>
    </Row>
    <Spacer height="3vh"/>
    <GridGenerator cols={4}>
      {Ingredient("Rice & Curry","LOL")}
      {Ingredient("Rice","LOL")}
      {Ingredient("Rice","LOL")}
      {Ingredient("Rice","LOL")}
      {Ingredient("Rice","LOL")}
      {Ingredient("Rice","LOL")}
      {Ingredient("Rice","LOL")}
      {Ingredient("Rice","LOL")}
      {Ingredient("Rice","LOL")}
    </GridGenerator>
    <Row>
      <PopularText>
       Selected <br/> Ingredients
      </PopularText>
      
    </Row>
    <Row>
    <h3>
      {selectedIngredients.toString()}
      </h3>
     
    </Row>
  </CustomContainer>
  )
}
export default IngredientSection;