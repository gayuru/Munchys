//Template.js
///////////////////////////////
//React & Material
import React,{useState}from 'react';

//Plugins
import styled from 'styled-components';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import { Container, Image, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
//Plugins
import * as doneData from "../media/done-animation.json";
import * as foodData from "../media/food-cooking.json";
import { usePromiseTracker } from "react-promise-tracker";

//Component Imports

//////////////////////////////
//Styled components
const CustomCon = styled.div`
// min-height: 80%;  /* Fallback for browsers do NOT support vh unit */
// min-height: 80vh; /* These two lines are counted as one :-)       */

// display: flex;
margin-top:5vh;
align-items: center;
`
const LoadingRow = styled(Row)`
justify-content: center;
`

const HeadingLoading = styled.h1`
font-size: 2rem;
margin-top:1vh;
color: #7F95D1;
text-align:center;
`

//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function Loading(props) {
  const [done, setDone] = useState()
  const { promiseInProgress } = usePromiseTracker();
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

  const RenderLoading=()=>{

    // setTimeout(() => {
    //   setDone(true);
    // }, 1000);

    return(
            <FadeIn>
            <CustomCon>
            <Container>
            {!done ? (
                <Row>
                    <Lottie options={defaultOptions} height={200} width={200} />         
                </Row>
              ) :(
                <Row>
                    <Lottie options={defaultOptions2} height={120} width={120} />         
                </Row>      
              )} 
              <LoadingRow>
                <HeadingLoading>fetching your favourite recipes</HeadingLoading>
              </LoadingRow>
              </Container>
              </CustomCon>
            </FadeIn>
    )
  }

  return (
    promiseInProgress &&
    <RenderLoading/>
  )
}
export default Loading;