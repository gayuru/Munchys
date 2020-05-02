//Template.js
///////////////////////////////
//React & Material
import React from 'react';

//Plugins
import styled from 'styled-components';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';
//Plugins
import Banner from '../media/banner.svg';
import heart from '../media/heart.svg';
import heartUnlike from '../media/heart-unliked.svg';
import logo from '../media/logo-coloured.svg';
import GridGenerator from '../Components/GridGenerator';
import Back from '../media/back.svg';
// import Recipe from '../Components/SingleRecipe'
import Pool from '../utils/UserPool';
import { Link, useHistory } from "react-router-dom";

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
background: url(${props => props.url}), url(https://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png) center ;

border-radius: 18px;
`
const HeadingSection = styled(Row)`
  margin-left:1vw;
  margin-top:2vh;
`

//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function Recipe(props) {

  const recipeId = props.match.params.id
  let history = useHistory();

  const RenderTop = ()=>{
    return(
      <>
      <Col>
      <CustomImage/>
      </Col>
      <Col>
      <HeadingSection>
      
        hi
      
      </HeadingSection>
     
      
      </Col>
      </>
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
          <RenderTop/>



        </Row>
        </Container>
  )
}
export default Recipe;