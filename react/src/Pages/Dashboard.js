//Dashboard.js
///////////////////////////////
//React & Material
import React, {useEffect,useState} from 'react';

//Plugins
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
//Component Imports

//////////////////////////////
//Styled components
const FullHeightContainer = styled(Container)`
  height:100vh;
  border-style: solid;
  border-color: #36FFC1;
`

//////////////////////////////
//Dashboard class
/**
 * Displays a template component
 */
function Dashboard(props) {
  const [currentTime,setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data=>{
      setCurrentTime(data.time)
    });
  },[]);

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const exampleFunction = () => {
    return (
      <h1>
        The current time is {convert(currentTime)}
      </h1>
    )
  }

  return (
  <FullHeightContainer>
    {exampleFunction()}
  </FullHeightContainer>
  )
}
export default Dashboard;