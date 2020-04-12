//Login.js
///////////////////////////////
//React & Material
import React from 'react';

//Plugins
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import FormWrapper from "../Components/FormWrapper"
import Login from "../Components/Login"


import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Doodle from '../media/login-vector.svg'
import Register from '../Components/Register';
//Component Imports

//////////////////////////////
//Styled components
const ImageColumn = styled.div`
  height:100vh;
  position: relative;
`
const CustomContainer = styled(Container)`
width:100vw;
`
const ContentWrap = styled.div`
margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
const CustomColumn = styled(Column)`
  // padding:20px;
  padding-right:0px;
  background-color: #FFC0BE;
`
const LoginColumn = styled(Column)`
  justify-content:center;
  @media only screen and (max-width: 767px) {
      margin-bottom:40px;
  }

  @media only screen and (max-width: 767px) and (orientation: portrait) {
      /* portrait phones */
      margin-bottom:40px;
  }
`
const Heading = styled.h1`
font-style: normal;
font-weight: normal;
font-size: 5rem;
line-height: 105.81%;
/* or 89px */

text-align: center;
letter-spacing: -0.045em;

color: #000000;

text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.12);
margin-bottom:10%;
`
const CustomDoodle = styled(Image)`
  // height:100%;
`
//////////////////////////////
//Component class
/**
 * Displays the login page
 */
function LoginPage(props) {
  
  const renderLogin = () => {
    return (
      <CustomContainer fluid>
          <Row>
              <LoginColumn xs={12} md={5}>
              <FormWrapper form={<Login/>} heading="Log in to your account"/>
              </LoginColumn>
             
              <CustomColumn xs={12} md={7}>
              <ImageColumn>
                <ContentWrap>
                <Heading>
                We bring the Good Cooking <br/> to Life
                 </Heading>
                  <CustomDoodle src={Doodle} fluid/>
                </ContentWrap>
              </ImageColumn>
              </CustomColumn>
          </Row>
      </CustomContainer>
    )
  }

  const renderRegister = () => {
    return (
      <CustomContainer fluid>
          <Row>
              <LoginColumn xs={12} md={5}>
              <FormWrapper form={<Register/>} heading="Register your account"/>
              </LoginColumn>
             
              <CustomColumn xs={12} md={7}>
              <ImageColumn>
                <ContentWrap>
                <Heading>
                 We bring the Good Cooking <br/> to Life
                 </Heading>
                  <CustomDoodle src={Doodle} fluid/>
                </ContentWrap>
              </ImageColumn>
              </CustomColumn>
          </Row>
      </CustomContainer>
    )
  }

  if(props.location.pathname === "/register"){
    return(
      <div>{renderRegister()}</div>
    )
    // renderRegister();
  }else{
    return(
      <div>{renderLogin()}</div>
    )
  }  
}
export default LoginPage;