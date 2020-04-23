//Template.js
///////////////////////////////
//React & Material
import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
//Plugins
import styled from 'styled-components';


//Component Imports

//////////////////////////////
//Styled components
const WrapperExample = styled.div`
  background-color: black;
`

const TextExample = styled.p`
  text-align: center;
  padding:5px 0px;
  color: white;
`

//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function RecipePage(props) {

  const [recipeData, setrecipeData] = useState(props.location.state.data);


  return (
  <Container>

  </Container>
  )
}
export default RecipePage;