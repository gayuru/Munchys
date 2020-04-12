//FormWrapper.js
///////////////////////////////
//React & Material
import React from 'react';

//Plugins
import styled from 'styled-components';

import logo from '../media/logo.svg'
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
//Component Imports

//////////////////////////////
//Styled components
// const Wrapper = styled(Container)`
//   height:100vh;
// `
const CustomRow = styled(Row)`
// align-items: center;
justify-content: center;
`
const Spacer = styled.div`
  height: ${props => props.height};
`
const CustomHeading = styled.h1`
  font-weight:300;
`
const Logo = styled.img`
  height:100px;
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function FormWrapper(props) {


  return (
    <React.Fragment>

      <Container>
        <Spacer height="20vh" />
        <CustomRow>
          <Logo alt="company logo" src={logo} />
        </CustomRow>
        <Spacer height="3vh" />
        <CustomRow>
          <CustomHeading>
            {props.heading}
          </CustomHeading>
        </CustomRow>
        <Spacer height="4vh" />
        <CustomRow>
          {props.form}
        </CustomRow>
        <Spacer height="2vh" />
        <CustomRow>
          <footer>
            © 2020 Biorific
        </footer>
        </CustomRow>
      </Container>

    </React.Fragment>
  )
}
export default FormWrapper;