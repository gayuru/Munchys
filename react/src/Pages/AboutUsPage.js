//Template.js
///////////////////////////////
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import GitHubButton from 'react-github-btn';
import { Link } from "react-router-dom";
//Plugins
import styled from 'styled-components';
import GayuruProfile from '../media/gayuru.jpg';
import heart from '../media/heart.svg';
import logo from '../media/logo-coloured.svg';
import SaadProfile from '../media/saad.jpg';
import Team from '../media/team.svg';


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

const CustomText = styled.span`
color:#7F95D1;
font-weight:bold; 
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function AboutUsPage(props) {

  const MyProfile =(props)=>{
    return(
      <>
      <Col>
      <ProfileImage src={props.image} roundedCircle/>
      <NameHeading>
          Hey I'm <CustomText>{props.name}</CustomText>
      </NameHeading>
      <Text>
        {props.intro}
      </Text>
      <Spacer height="1vh"/>
      <ImageRow>
      <GitHubButton href={props.github} data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @gayuru on GitHub">{`Follow @${props.githubName}`}</GitHubButton>
      </ImageRow>
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
      <Heading>Food is the 'Ingredient' that binds us togehter</Heading>
    </ImageRow>
    <Spacer height="1vh"/>
    <ImageRow>
      We believe food unites us a community <br/> Food like us is unique, every recipe is different, look different, smell different but best of all, they all taste delicious<br/> Join our community, and try the millions of tasty flavours the community has for you!
    </ImageRow>
    <Spacer height="3vh"/>
    <Row>
      <MyProfile name="Gayuru" image={GayuruProfile}intro={`\nI've been passionate about working with Front End designs \n  and how integration work with Cloud Services.\n
      Hence I hope you found the design of Munchys, Simple and Minimalist. \n\n We spent a lot of time redefining the user experience and how well we can integrate cloud services efficiently.\n
      Perhaps we used Spoonaculars' amazing API to give you all these fascinating recipes which you could try straight at home.`}
      github="https://github.com/gayuru" githubName="gayuru"
      />
      <MyProfile name="Saad"  image={SaadProfile}intro={`\nI've been motivated about to learn and work with AWS's Cloud functionalities \n  and learning concepts of beautiful design with my lad Gayuru\n
      Hence I hope you found the functionalities and design of our site Fun and Enjoyable \n\n We spent a lot of time coming up with efficient algorithms to provide you all the best user experience\n
      Credit should also be given to Spoonacular for providing us with such a simple API allowing us to give recipes to try anytime and anywhere`}
        github="https://github.com/S3717159" githubName="Saad Ali"
      />
    </Row>
    </Container>
  )
}
export default AboutUsPage;