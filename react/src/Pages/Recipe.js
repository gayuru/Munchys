//Template.js
///////////////////////////////
//React & Material
import React, { useEffect, useState } from 'react';

//Plugins
import styled from 'styled-components';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
//Plugins
import Servings from '../media/servings.svg';
import Wine from '../media/wine.svg';
import Vegan from '../media/vegan.svg';
import Dish from '../media/dish.svg';
import heart from '../media/heart.svg';
import Clock from '../media/clock-colored.svg';
import logo from '../media/logo-coloured.svg';
import GridGenerator from '../Components/GridGenerator';
import Back from '../media/back.svg';
// import Recipe from '../Components/SingleRecipe'
import Pool from '../utils/UserPool';
import { Link, useHistory } from "react-router-dom";
import { Markup } from 'interweave';
const axios = require('axios').default;

//Component Imports

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
const CustomImage = styled(Image)`
width: 589px;
height: 449px;
background: url(${props => props.url}), url(https://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png) no-repeat center center fixed;  ;
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
border-radius: 18px;
`
const HeadingSection = styled(Row)`
  margin-left:1vw;
  margin-top:1vh;
`

const TimeText = styled.text`
font-weight: bold;
font-size: 20px;
letter-spacing: -0.025em;
color: #7F95D1;
margin-left:1vw;
margin-bottom:0.5vh;
`
const HeadingText = styled.text`
font-weight: bold;
font-size: 51px;
line-height: 68px;
// letter-spacing: -0.025em;
text-align:left;
color: #7F95D1;
`
const BodyText = styled.text`
font-weight: normal;
font-size: 16px;
line-height: 21px;
text-align: justify;
margin-top:1vh;
`


const CustomButton = styled(Button)`
border: 2px solid #F7AF9D;
box-sizing: border-box;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
margin-top:1vh;
background-color: Transparent;
background-repeat:no-repeat;
color: #000000;

&:hover,&:focus,&:active{
  color: white !important;
  background-color: #7F95D1; !important;
  border-color: #7F95D1; !important;
}
`
const CustomDish = styled(Image)`
margin-top:2vh;

`

const FactText = styled.text`
font-weight: bold;
font-size: 31px;
line-height: 68px;
// letter-spacing: -0.025em;
text-align:left;
color: #7F95D1;
margin-top:2vh;
`
const FactSubText = styled.text`
font-weight: bold;
font-size: 23px;
line-height: 31px;
/* identical to box height */
letter-spacing: -0.025em;
margin-top:0.5vh;
text-align:center;
`

const MainNumber = styled.text`
font-weight: bold;
font-size: 36px;
// letter-spacing: -0.025em;
// text-align:center;
// margin-left:1vw;
color: #7F95D1;
// margin-top:2vh;
`

const FactCol = styled(Col)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const MainRow = styled(Row)`
margin-top:3vh;
`
const IRow = styled(Row)`
margin-top:1vh;
`
const IText = styled.label`
font-weight: normal;
font-size: 19px;
`
const LabelIngredient = styled.label`
margin-left:1vw;
`

const CustomCheckbox = styled.input`

`
const GoBack = styled(Image)`
margin:0px 15px 5px 0px;
height:30px
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function Recipe(props) {

  const recipeId = props.match.params.id
  const [recipe, setrecipe] = useState();
  let history = useHistory();

  const handleClick = () => {
    console.log("make this recipe favourite")
  }

  useEffect(() => {
    axios.get(`/single-details?id=${recipeId}`)
      .then(function (response) {
        const recipeData = JSON.parse(response.data)
        console.log(recipeData);
        setrecipe(recipeData);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [window.location.pathname])

  const FormatInstructions = (i) => {
    const stepArr = i[0]["steps"];

    const jsx = stepArr.map((step) =>
      <div key={step.number}>
        <IText>{step.number + ". " + step.step}</IText>
        <br /><br />
      </div>
    )
    return jsx;
  }
  const RenderTop = () => {
    return (
      <>
        <Col>
          <CustomImage url={recipe ? recipe.image : " "} />
        </Col>
        <Col>
          <HeadingSection>
            <Image src={Clock} />
            <TimeText>
              {recipe ? recipe.readyInMinutes : null} mins
        </TimeText>
            <TimeText>
              |
        </TimeText>
            <TimeText>
              by {recipe ? recipe.creditsText : null}
            </TimeText>
          </HeadingSection>
          <HeadingSection>
            <HeadingText>
              <Link onClick={() => { history.push('/recipes') }}><GoBack src={Back} /></Link>
              {recipe ? recipe.title : null}
            </HeadingText>
          </HeadingSection>
          <HeadingSection>
            <BodyText>
            <Markup content={recipe ? recipe.summary : "No Description"} />
        </BodyText>
          </HeadingSection>
          <HeadingSection>
            <CustomButton onClick={handleClick}>
              Favourite this ❤️
      </CustomButton>
          </HeadingSection>
        </Col>
      </>
    )
  }

  function Fact(props) {
    return (
      <FactCol>
        <Row>
          <CustomDish src={props.image} /><br />
        </Row>
        <Row>
          <MainNumber>
            {props.fact}
          </MainNumber>
        </Row>

        <Row>
          <FactSubText>
            {props.name}
          </FactSubText>
        </Row>

      </FactCol>
    )
  }

  function ReturnVegan(y) {
    if (y === true) {
      return "Yes"
    } else {
      return "No"
    }
  }

  const RenderQuickFacts = () => {
    return (
      <HeadingSection>
        <Fact image={Servings} name="Savings" fact={recipe ? recipe.servings : null} />
        <Fact image={Vegan} name="Vegan" fact={recipe ? ReturnVegan(recipe.vegan) : null} />
        <Fact image={Dish} name="Dish Type" fact="Asian" />
        <Fact image={Wine} name="Wine Paring" fact="Moscato" />
      </HeadingSection>
    )
  }

  const RenderIngredients = (ingredients) => {
    return (
      ingredients.map((i, idx) =>
      <IRow>
        <div class="pretty p-icon p-round p-smooth" key={idx}>
          <input type="checkbox" />
          <div class="state p-success">
            <i class="icon mdi mdi-check"></i>
            <IText>{i.original}</IText>
          </div>
        </div>
      </IRow>
      )
    )
  }
  const RenderMain = () => {
    return (
      <MainRow>
        <Col>
          <Row>
            <FactText>
              Ingredients
          </FactText>
          </Row>
            {recipe ? RenderIngredients(recipe.extendedIngredients) : null}
        </Col>
        <Col>
          <Row>
            <FactText>
              Instructions
          </FactText>
          </Row>
          <Row>
            <BodyText>
              {recipe ? FormatInstructions(recipe.analyzedInstructions) : null}
            </BodyText>
          </Row>

        </Col>
      </MainRow>


    )
  }
  return (
    <Container>
      <Row>
        <Col>
          <Logo src={logo} />
        </Col>
        <Col>
          <Heart onClick={() => history.push('/saved-recipes')} src={heart} />
        </Col>
      </Row>
      <Row>
        <RenderTop />
      </Row>
      <Row>
        <FactText>
          Quick Facts
          </FactText>
      </Row>
      <RenderQuickFacts />
      <RenderMain />
    </Container>
  )
}
export default Recipe;