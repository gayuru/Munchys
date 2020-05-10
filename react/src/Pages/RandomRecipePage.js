//Template.js
///////////////////////////////
//React & Material
import React from 'react';

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
function RandomRecipePage(props) {

  const exampleFunction = () => {
    return "My example";
  }

  return (
  <WrapperExample>
    <TextExample>
      {props.example} and {exampleFunction()}
    </TextExample>
  </WrapperExample>
  )
}
export default RandomRecipePage;