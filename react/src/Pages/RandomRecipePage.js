//Template.js
///////////////////////////////
//React & Material
import React, { useEffect, useState } from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";
//Plugins
import styled from 'styled-components';
import * as doneData from "../media/done-animation.json";
import * as foodData from "../media/food-carousel.json";


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

const CustomCon = styled.div`
min-height: 80%;  /* Fallback for browsers do NOT support vh unit */
min-height: 80vh; /* These two lines are counted as one :-)       */

display: flex;
// margin-top:10vh;
align-items: center;
`
const LoadingRow = styled(Row)`
justify-content: center;
`

const HeadingAnimation = styled.h1`
font-size: 3rem;
margin-top:1vh;
color: #7F95D1;
text-align:center;
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function RandomRecipePage(props) {

  const [done, setDone] = useState()
  const [recipe, setRecipe] = useState([]);
  const [redirect, setRedirect] = useState(false);
  let history = useHistory();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: foodData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    axios.get(`/tasteyourluck`)
      .then(function (response) {
        const data = response.data
        setRecipe(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [window.location.pathname])

  const RenderAnimation = () => {
    setTimeout(() => {
      setDone(true);
      setTimeout(() => {
        setRedirect(true);
      }, 1000);
    }, 2500);

    return (
      <FadeIn>
        <CustomCon>
          <Container>
            {!done ? (
              <Row>
                <Lottie options={defaultOptions} height={120} width={120} />
              </Row>
            ) : (
                <Row>
                  <Lottie options={defaultOptions2} height={120} width={120} />
                </Row>

              )}
            {redirect && recipe ? history.push(`/recipe/${recipe.id}`,{random:true}) : null}
            <LoadingRow>
              <HeadingAnimation>what's cooking today?</HeadingAnimation>
            </LoadingRow>
          </Container>
        </CustomCon>
      </FadeIn>
    )
  }
  return (
    <RenderAnimation />
  )
}
export default RandomRecipePage;