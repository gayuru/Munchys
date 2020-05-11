//Template.js
///////////////////////////////
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
//Plugins
import styled from 'styled-components';

import Team from '../media/team.svg';

import heart from '../media/heart.svg';
import logo from '../media/logo-coloured.svg';
import GayuruProfile from '../media/gayuru.jpg'
import { trackPromise } from 'react-promise-tracker';
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
const ImageRow = styled(Row)`
justify-content:center;

`

const Heading = styled.h1`
margin-top:3vh;
font-weight:bold;
`
const NameHeading = styled.h2`
margin-top:1vh;
font-weight:bold;
`

const ProfileImage = styled(Image)`
  width:200px;
`
const Spacer = styled.div`
  height: ${props => props.height};
`
const Text = styled.text`
white-space: pre-wrap;
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function AboutUsPage(props) {

  const exampleFunction = () => {
    return "My example";
  }

  const MyProfile =(props)=>{
    return(
      <>
      <Col>
      <ProfileImage src={props.image} roundedCircle/>
      <NameHeading>
          Hey I'm {props.name}
      </NameHeading>
      <Text>
        {props.intro}
      </Text>
      </Col>
      </>

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
    <ImageRow>
      <Image src={Team} fluid/>
    </ImageRow>
    <ImageRow>
      <Heading>'We' is powerful.</Heading>
    </ImageRow>
    <Spacer height="1vh"/>
    <ImageRow>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,  <br/>tempor incididunt ut labore et dolore magna aliqua.mauris a diam.<br/> Proin libero nunc consequat interdum varius sit amet mattis.
    </ImageRow>
    <Spacer height="3vh"/>
    <Row>
      <MyProfile name="Gayuru" image={GayuruProfile}intro={`Hey I code for fun \n this is my lad`}/>
      <MyProfile name="Saad"/>
    </Row>
    </Container>
  )
}
export default AboutUsPage;