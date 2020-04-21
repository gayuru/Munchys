//Template.js
///////////////////////////////
//React & Material
import React,{useCallback,useState,useEffect} from 'react';

//Plugins
import styled from 'styled-components';
import { Container, Row,Image } from 'react-bootstrap';
import GridGenerator from './GridGenerator';

import Food from '../media/food.svg';
import API from '../utils/api'
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

const IPicture = styled(Image)`
border-radius: 18px;
width: 189px;
height: 137px;
object-fit: cover;
opacity: 0.7;
`

const Overlay = styled.div`
background: #D3F8E2;
width: 189px;
border-radius: 18px;
`
const Flex = styled.div`
justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function IngredientSection(props) {

  const [popularIngredients,setPopularIngredients] = useState([""])
  const [showResults, setShowResults] = useState(false)
  const [selectedIngredients, setSelectedIngredients] = useState([])

  useEffect(() => {
    API.get('/Production/ingredients')
    .then(function (response) {
      console.log(response.data)
      setPopularIngredients(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });


  }, [])

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
        <Flex onClick={()=> getFoodItem(name)}>
        <Overlay>
        <IPicture src={picture}/>
        </Overlay>
        <FoodText>
         {name}
         {  selectedIngredients.includes(name) ? " ✅" : null }
        </FoodText>
        </Flex>
    )
  }

  const PingredientsView = popularIngredients.map((i) =>
      <div>
      {Ingredient(i.IngredientName,i.Picture)}
      </div>
    );
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
    {popularIngredients.length ? PingredientsView: null}
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