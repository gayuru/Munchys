//Login.js
///////////////////////////////
//React & Material
import React, { useState } from 'react';
import {
  Link,
  withRouter,
} from "react-router-dom";
//Plugins
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//Component Imports
import API from "../utils/api";
import auth from "../utils/auth";
import { useForm } from 'react-hook-form'
import Pool from '../utils/UserPool';
import {CognitoUser} from 'amazon-cognito-identity-js';
//////////////////////////////
//Styled components
const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`
const AccountButton = styled(Button)`
display:block;
color: #000000 !important;
background-color: #FFC0BE !important;
border-color: #FFC0BE !important;
margin-bottom:15px;
width:100%;

&:hover,&:focus,&:active{
  color: black !important;
  background-color: #FF82A9 !important;
  border-color: #FF82A9 !important;
}
`
const BackButton = styled(Button)`
  display:block;
  color: #000000 !important;
  border-color: #FFC0BE !important;
  background-color: #FFFF !important;
  width:100%;

  &:hover {
    border-color: #FF82A9 !important;
  }
`
const CustomFormLabel = styled(Form.Label)`
  float:left;
`
const CustomMessage = styled.p`
  float:left;
  color: rgba(0, 0, 0, 0.31);
  
`
const Spacer = styled.div`
  height: ${props => props.height};
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function Verification(props) {

  const { register, handleSubmit, reset, errors } = useForm()
  const [registererror, setRegistererror] = useState();


  const onSubmit = data => {

    console.log(Pool);
    console.log(localStorage)
     const username = localStorage.getItem('data')


  var userData = {
      Username: username,
      Pool: Pool,
  };
   
  var cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(data.code, true, function(err, result) {
      if (err) {
          setRegistererror(err.message)
          reset()
      }
     if(result ==="SUCCESS"){
        props.history.push('/');
     }
  });

  }

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicCode">
          <CustomFormLabel>Verification Code</CustomFormLabel>
          <Form.Control type="text" name="code" ref={register({ required: true })} />
          {errors.code && <span>This field is required</span>}
        </Form.Group>
        <Spacer height="2vh" />
        {registererror}
        <Spacer height="1vh" />
        {/* <StyledLink to="/register"> */}
        <AccountButton type="submit">
          Confirm Account
         </AccountButton>
        {/* </StyledLink> */}
      </Form>
    </React.Fragment>
  )
}
export default withRouter(Verification);