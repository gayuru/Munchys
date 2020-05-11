//Login.js
///////////////////////////////
//React & Material
import { CognitoUser } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { withRouter } from "react-router-dom";
//Plugins
import styled from 'styled-components';
import Pool from '../utils/UserPool';


//////////////////////////////
//Styled components

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