//Login.js
///////////////////////////////
//React & Material
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Link, withRouter } from "react-router-dom";
//Plugins
import styled from 'styled-components';
import auth from "../utils/auth";
import UserPool from '../utils/UserPool';



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

const Spacer = styled.div`
  height: ${props => props.height};
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function Register(props) {

  const { register, handleSubmit, errors } = useForm()
  const [registererror, setRegistererror] = useState();


  var attributeList = [];

  const onSubmit = data => {

    var dataFn = {
      Name: 'family_name',
      Value: data.lname,
    };
    
    var dataFg = {
        Name: 'given_name',
        Value: data.fname,
    };
  
    var attributeFn = new CognitoUserAttribute(dataFn);
    var attributeGn = new CognitoUserAttribute(dataFg);
  
    attributeList.push(attributeFn);
    attributeList.push(attributeGn);

    UserPool.signUp(data.email,data.password,attributeList,null,(err, data) => {
      if (err){
        setRegistererror(err.message);
      }else{
        localStorage.setItem('data', data.user.username);
        auth.login(() => {
          props.history.push("/register/verification");
        });
      } 
      // conso
   
    });


    // API.post('/register', data)
    //   .then(function (response) {
    //     console.log(response);
    //     let success = response.data.registration_success;
    //     if (success === "YES") {
    //       //setLocalStorage to user data
    //       auth.login(() => {
    //         props.history.push("/dashboard");
    //       });
    //     } else {
    //       setRegistererror("The user email already exists!");
    //       reset();
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });



  }

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Col>
            <CustomFormLabel>First name</CustomFormLabel>
            <Form.Control type="text" name="fname" ref={register({ required: true })} />
            {errors.fname && <span>This field is required</span>}
          </Col>
          <Col>
            <CustomFormLabel>Last name</CustomFormLabel>
            <Form.Control type="text" name="lname" ref={register({ required: true })} />
            {errors.lname && <span>This field is required</span>}
          </Col>
        </Form.Row>
        <Spacer height="1vh" />
        <Form.Group controlId="formBasicEmail">
          <CustomFormLabel>Email address</CustomFormLabel>
          <Form.Control type="email" name="email" ref={register({ required: true })} />
          {errors.email && <span>This field is required</span>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <CustomFormLabel>Password</CustomFormLabel>
          <Form.Control type="password" name="password" ref={register({ required: true })} />
          {errors.password && <span>This field is required</span>}
        </Form.Group>



        <Spacer height="2vh" />
        {registererror}
        <Spacer height="1vh" />
        {/* <StyledLink to="/register"> */}
        <AccountButton type="submit">
          Create an account
         </AccountButton>
        {/* </StyledLink> */}
        <StyledLink to="/">
          <BackButton>
            Go back
         </BackButton>
        </StyledLink>
      </Form>
    </React.Fragment>
  )
}
export default withRouter(Register);