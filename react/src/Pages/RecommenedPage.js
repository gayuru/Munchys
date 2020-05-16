//Template.js
///////////////////////////////
//React & Material
import React, { useState,useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
//Plugins
import styled from 'styled-components';
import GridGenerator from '../Components/GridGenerator';
import Recipe from '../Components/SingleRecipe';
import Back from '../media/back.svg';
import Banner from '../media/banner.svg';
import heart from '../media/heart.svg';
import logo from '../media/logo-coloured.svg';
import { trackPromise } from 'react-promise-tracker';
import Pool from '../utils/UserPool';
import API from "../utils/api"

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
function RecommendedPage(props) {
  let history = useHistory();

  const RecipeView = () => {
    const [recipeData, setrecipeData] = useState([]);

    const user = Pool.getCurrentUser();
    useEffect(() => {
      trackPromise(
      API.get(`/what-is-popular?userId=${user.username}`)
      .then(function (response) {
        console.log(response.data)
        // console.log(localStorage.getItem('ingredients'))
        setrecipeData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      }));
      
    }, [window.location.pathname])


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
          <Link to="/home">
            <Logo src={logo} />
          </Link>
          </Col>
          <Col>
          <Link to="/saved-recipes">
            <Heart src={heart} />
          </Link>
          </Col>
        </Row>
        <Row>
          <Image src={Banner} fluid />
        </Row>
        <Row>
          <RecipeHeading>
            <Link onClick={() => { history.push('/home') }}><GoBack src={Back} />
            </Link>Recipes recommended for you
        </RecipeHeading>
        </Row>
        <Spacer height="3vh" />
        <GridGenerator cols={3}>
          {recipeData.length ? renderRecipes() : null}
        </GridGenerator>
      </Container>
    )
  }

    return (
      <RecipeView />
    )

}
export default RecommendedPage;