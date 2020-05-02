//Template.js
///////////////////////////////
//React & Material
import React, { useState,useEffect } from 'react';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';
//Plugins
import styled from 'styled-components';
import Banner from '../media/banner.svg';
import heart from '../media/heart.svg';
import heartUnlike from '../media/heart-unliked.svg';
import logo from '../media/logo-coloured.svg';
import GridGenerator from '../Components/GridGenerator';
import Back from '../media/back.svg';
import Recipe from '../Components/SingleRecipe'
import Pool from '../utils/UserPool';
import { Link, useHistory } from "react-router-dom";

const axios = require('axios').default;

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

const GoBack = styled(Image)`
margin:0px 15px 5px 0px;
height:30px
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

const CustomLink = styled(Link)`
text-decoration: none;

&:focus,  &:visited, &:link, &:active {
    text-decoration: none;
    color:black;
}

&:hover{
  color:#7F95D1;
}
`
const Spacer = styled.div`
  height: ${props => props.height};
`
//////////////////////////////
//Recipe class
/**
 * Displays a template component
 */
function RecipesPage(props) {
  let history = useHistory();

  const RecipeView = () => {
    const [recipeData, setrecipeData] = useState(props.location.state.data[1]);
    const [ingredients, setIngredients] = useState(props.location.state.data[0]);

    function renderIngredients() {
      return (
        ingredients.map((i) =>
          <BadgeCustom pill variant="primary">
            {i.IngredientName}
          </BadgeCustom>
        )
      )
    }

    function renderRecipes() {
      return (
        recipeData.map((x) =>
          <div>
            <CustomLink to={`/recipe/${x.id}`}>
            <Recipe data={x} />
            </CustomLink>
          </div>
        )
      )
    }
    return (
      <Container>
        <Row>
          <Col>
            <Logo src={logo} />
          </Col>
          <Col>
          <audio controls="controls" preload="auto" id="audio_player">
          <source src={"https://speech-post.s3.amazonaws.com/mynameis.mp3"}></source>
          </audio>
            <Heart onClick={() => history.push('/saved-recipes')} src={heart} />
          </Col>
        </Row>
        <Row>
          <Image src={Banner} fluid />
        </Row>
        <Row>
          <IngredientText>
            Ingredients Chosen {renderIngredients()}
            {console.log(recipeData)}
          </IngredientText>
        </Row>
        <Row>
          <RecipeHeading>
            <Link onClick={() => { history.push('/home') }}><GoBack src={Back} />
            </Link>Recipes generated
        </RecipeHeading>
        </Row>
        <Spacer height="3vh" />
        <GridGenerator cols={3}>
          {recipeData.length ? renderRecipes() : null}
        </GridGenerator>
        
      </Container>
    )
  }

  const SavedRecipes = () => {

    const [recipeData, setrecipeData] = useState("");
    const user = Pool.getCurrentUser();
    console.log(user.username)
    useEffect(() => {
      axios.get(`/fav-recipes?userId=${user.username}`)
        .then(function (response) {
          const data = JSON.parse(response.data.body)
          setrecipeData(data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [window.location.pathname])



    function renderRecipes() {
      return (
        recipeData.map((x) =>
          <div>
            <Recipe data={x} />
          </div>
        )
      )
    }
    return (
      <Container>
        <Row>
          <Col>
            <Logo src={logo} />
          </Col>
        </Row>
        <Row>
          <Image src={Banner} fluid />
        </Row>
        <Row>
          <RecipeHeading>
            <Link onClick={() => { history.push('/home') }}><GoBack src={Back} />
            </Link>Saved Recipes
        </RecipeHeading>
        </Row>
        <Spacer height="3vh" />
        <GridGenerator cols={3}>
          {recipeData.length ? renderRecipes() : null}
        </GridGenerator>
      </Container>
    )
  }


  if (window.location.pathname === "/recipes") {
    return (
      <RecipeView />
    )
  } else if (window.location.pathname === "/saved-recipes") {
    return (
      <React.Fragment>
       <SavedRecipes/>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        null
      </React.Fragment>
    )
  }


}
export default RecipesPage;