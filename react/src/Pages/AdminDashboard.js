//Template.js
///////////////////////////////
//React & Material
import React,{useContext,useState,useEffect} from 'react';
import {
    Link,
   
  } from "react-router-dom";
//Plugins
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import BannerImage from '../media/Banner.svg'
//Component Imports
import auth from "../utils/auth"
import {AccountContext} from '../utils/Account'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../utils/UserPool';
//////////////////////////////
//Styled components
const CustomContainer = styled(Container)`
@media only screen and (max-width: 767px) and (orientation: portrait) {
    /* portrait phones */
    padding:30px;
}
`
const CustomImage = styled(Image)`
    margin-top:30px;
`

const CustomSub = styled.h3`
    margin-top:20px;
    font-style: normal;
    font-weight: normal;
`
const LineDeco = styled.div`
    background: #65CCB7;
    border-radius: 14px;
    min-width:64px;
    min-height:7px;
    display:inline-block;
    margin-bottom:40px;
`

const OrgBox = styled.div`
    border-radius: 43px;
    background: #D2FFF6;
    &:hover,&:focus,&:active{
        color: black !important;
        background-color: #16FFD0 !important;
        border-color: #16FFD0 !important;  
        -moz-transition: all .5s ease-in;
        -o-transition: all .5s ease-in;
        -webkit-transition: all .5s ease-in;
        transition: all .5s ease-in;
    }
`
const RoundLogo = styled.div`
    margin-top:20px;
    background: #2BAE93;
    border-radius: 30px;
    width: 132px;
    height: 110px;
`
const Info = styled(Col)`
    text-align:left;
    margin-top:20px;
    margin-right:30px;
`
const InfoButton = styled.span`
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;
letter-spacing: -0.095em;
color: #2BAE93;
 margin-left:10px;

position: relative;
bottom: 5px;
`

const CustomButton = styled(Button)`
display:block;
color: #000000 !important;
background-color: #D2FFF6 !important;
border-color: #D2FFF6 !important;
padding: 10px 20px 10px 20px;
margin-top:15px;
margin-bottom:15px;

&:hover,&:focus,&:active{
  color: black !important;
  background-color: #16FFD0 !important;
  border-color: #16FFD0 !important;

}
`

const PlantQty = styled.text`
font-weight: bold;
font-size: 81px;
line-height: 80px;
color:${props => props.color};
`

const PlantSub = styled.text`
font-style: italic;
font-weight: normal;
font-size: 20px;
color:${props => props.color};
`
const SubRow = styled(Row)`
margin-top:20px;
margin-bottom:30px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color:black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color:black;
    }
`;

const CustomFooter = styled.footer`
    position:absolute;
    bottom:0;
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function AdminDashboard(props) {

    const { getSession, logout } = useContext(AccountContext);

    const [value, setValue] = useState('');

      useEffect(() => {
          setValue(localStorage.getItem('userData'))
      }, [window.location.pathname])
    return (
        <CustomContainer>
            <Row>
                <CustomImage src={BannerImage} fluid/>
            </Row>
            <Row>
                <h1>
                Good Evening, Rob!
                {/* {console.log(JSON.parse(value))} */}
                </h1>
            </Row>
            <Row>
                <CustomSub>
                    Your Organizations
                </CustomSub>
            </Row>
            <Row>
            <LineDeco/>
            </Row>
            <Row>
                <OrgBox>
                  <Container>
                      <Row noGutters>
                        <Col>
                        <RoundLogo></RoundLogo>
                        </Col>
                        <StyledLink to="/org">
                        <Info>
                        <h3>
                            Accenture
                        <InfoButton>
                            ...
                        </InfoButton>
                        </h3>
                        <p>
                            161 Collins St,<br/>Melbourne
                        </p>
                        </Info>
                        </StyledLink>
                      </Row>
                      <SubRow>
                      <Col>
                        <PlantQty>
                            16<br/>
                        </PlantQty>
                        <PlantSub>
                            plants
                        </PlantSub>
                        </Col>
                        <Col>
                        <PlantQty color="#2BAE93">
                            4<br/>
                        </PlantQty>
                        <PlantSub color="#2BAE93">
                        needs attention
                        </PlantSub>
                        </Col>
                      </SubRow>
                  </Container>
                </OrgBox>
            </Row>
            <Row>
            <CustomFooter>
                <CustomButton onClick={()=>{
                     getSession()
                     .then(session => {
                       console.log('Session:', session);
                     })
                }}>
                    Get session
                    </CustomButton>

            <CustomButton onClick={logout}>
                    Logout
            </CustomButton>
            
             </CustomFooter>
             </Row>
        </CustomContainer>
    )
}
export default AdminDashboard;