//Template.js
///////////////////////////////
import React, { useEffect, useState } from 'react';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
//Plugins
import styled from 'styled-components';

import Team from '../media/team.svg';

import heart from '../media/heart.svg';
import logo from '../media/logo-coloured.svg';

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

//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function AboutUsPage(props) {

  const exampleFunction = () => {
    return "My example";
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
    <Row>
      <Image src={Team} fluid/>
    </Row>
    </Container>
  )
}
export default AboutUsPage;