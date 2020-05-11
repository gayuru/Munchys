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
import Modal from 'react-modal';
//Component Imports

//////////////////////////////
//Styled components
const CustomCon = styled.div`
// min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
// min-height: 100vh; /* These two lines are counted as one :-)       */

// display: flex;
// align-items: center;
background-color:#FFF5F5;

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
const customStyles = {
  overlay: {
    backgroundColor: '#FFF5F5',
    zIndex : '2'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border: 'none',
    padding:'none'
    
  }
};


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function Loading(props) {
  const [done, setDone] = useState()
  const [modalIsOpen,setIsOpen] = React.useState(true);
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
    return(
            <FadeIn>
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              contentLabel="Example Modal"
            >
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
                <HeadingLoading>what's cooking today ?</HeadingLoading>
              </LoadingRow>
              </Container>
              </CustomCon>
              </Modal>
            </FadeIn>
    )
  }

  return (
    promiseInProgress &&
    <RenderLoading/>
  )
}
export default Loading;