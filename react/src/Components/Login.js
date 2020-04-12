//Login.js
///////////////////////////////
//React & Material
import React, {useState,useContext} from 'react';
import {AccountContext} from '../utils/Account'
import {
  Link,
  withRouter,
 
} from "react-router-dom";
//Plugins
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


//Component Imports
import API from "../utils/api";
import auth from '../utils/auth';
import {useForm} from 'react-hook-form';
import {CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js'
import UserPool from '../utils/UserPool'

//////////////////////////////
//Styled components
const SubmitButton = styled(Button)`
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
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const AccountButton = styled(Button)`
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
const Spacer = styled.div `
  height: ${props => props.height};
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function Login(props) {

  const { register, handleSubmit, errors,reset} = useForm();
  const [loginerror, setLoginerror] = useState();
  const { authenticate } = useContext(AccountContext);

  const onSubmit = data => { 

    authenticate(data.email, data.password)
    .then(data => {
     
      console.log('Logged in!', data);
    })
    .catch(err => {
      setLoginerror(err.message);
      reset();
    })

    // const user = new CognitoUser({
    //   Username:data.email,
    //   Pool:UserPool
    // });

    // const authDetails = new AuthenticationDetails({
    //   Username: data.email,
    //   Password: data.password
    // });

    // user.authenticateUser(authDetails, {
    //   onSuccess: data => {
    //     console.log(data);
    //     auth.login(()=>{
    //       props.history.push("/dashboard");
    //     });
    //   },

    //   onFailure: err => {
    //     console.log(err);
    //     setLoginerror(err.message);
    //     reset();
    //   },

    //   newPasswordRequired: data => {
    //     setLoginerror(data.message);
    //     reset();
    //   }
    // });
  }


  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <CustomFormLabel>Email address</CustomFormLabel>
          <Form.Control  type="email" name="email" placeholder="Enter email" ref={register({ required: true })} />
          {errors.email && <span>This field is required</span>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <CustomFormLabel>Password</CustomFormLabel>
          <Form.Control type="password" name="password" placeholder="Password" ref={register({ required: true })} />
          {errors.password && <span>This field is required</span>}
        </Form.Group>
        {loginerror}
        <Spacer height="4vh"/>
        {/* <StyledLink to="/dashboard"> */}
        
        <SubmitButton type="submit">
          Log in
        </SubmitButton>
        {/* </StyledLink> */}
         <StyledLink to="/register">
         <AccountButton >
          Create an account
         </AccountButton>
        </StyledLink>
        
      </Form>
    </React.Fragment>
  )
}
export default withRouter(Login);