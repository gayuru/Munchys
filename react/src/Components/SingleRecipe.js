//Template.js
///////////////////////////////
//React & Material
import React,{useState} from 'react';
//Plugins
import styled from 'styled-components';
import { Container, Image, Row, Col, Badge,Button, OverlayTrigger,Tooltip} from 'react-bootstrap';
import Clock from '../media/clock.svg'
import heartUnlike from '../media/heart-unliked.svg'
import heart from '../media/heart.svg'
import Pool from '../utils/UserPool';
const axios = require('axios').default;

//Component Imports

//////////////////////////////
//Styled components
const CustomRow = styled(Row)`
min-width: 378px;
min-height: 25vh;
background: url(${props => props.url}), url(https://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png) center ;

border-radius: 18px;
`
const BottomRow = styled(Row)`
background: #FFFFFF;
min-width:  378px;
min-height: 30vh;
position: relative;
top: -2vh;
border-radius: 18px;
`
const BadgeCustom = styled.div`
justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
// width: 102px;
padding:20px;
height: 38px;
left: 96px;
top: 823px;
margin-left:1vw;
margin-top:0.5vw;
background: rgba(255, 190, 190, 0.68);;
border-radius: 9px;
`
const ClockImg = styled(Image)`
margin-right:0.5vw;
`

const RecipeName = styled.h2`
font-style: normal;
font-weight: bold;
font-size: 24px;
float:left;
`

const LikeButton = styled(Image)`
float:right;
width:1.6vw;
`

const HeartButton = styled(Button)`
background:none;
border:none;

&:hover,&:focus,&:active,&:visited,&:link{
  color: none !important;
  background-color: none; !important;
  background:none;
  border:none;
  border-color: none; !important;
  outline: 0 !important;
}
`
const InfoRow = styled(Row)`
margin-top:3vh;
// padding:10px;
// margin-left:1.2vh;
margin-right:1.2vh;
`
const CRow = styled(Row)`
// margin-top:1vh;
// margin
// margin-left:20px;
// margin-right:20px;
`
const Summary = styled.div`
padding:20px;
`
const Numbers = styled.span`
font-weight: bold;
font-size: 34px;
color: #7F95D1;
`
const SubHeading = styled.span`
font-style: italic;
font-weight: normal;
font-size: 17px;
`
const Spacer = styled.div`
  height: ${props => props.height};
`
const Time = styled.span`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 17px;
`
const CustomContainer = styled(Container)`
// margin-right:10vw;
`
//////////////////////////////
//Component class
/**
 * Displays a template component
 */
function SingleRecipe(props) {

  const [recipe, setrecipe] = useState(props.data)
  const [likeButton,setLikeButton] = useState(heartUnlike)
  function ValidString(x){
    var dotPosition = x.indexOf(".");
    var theBitBeforeTheDot = x.substring(0, dotPosition);
    var cleanText = theBitBeforeTheDot.replace(/<\/?[^>]+(>|$)/g, "");
    return cleanText+".";
  }

  function ReturnVegan(y){
    if(y === true){
      return "Yes"
    }else{
      return "No"
    }
  }

  function handleClick(id){
    likeButton === heart ? setLikeButton(heartUnlike) : setLikeButton(heart);
    
    const user = Pool.getCurrentUser();
    // console.log(user.username);

    const fav = {
      "userId" :user.username,
      "recipeId": id
    }
    axios.post('/fav-recipes', fav)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        alert(error);
      });
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  const getExt = (i)=>{
    var str= "";
    for (let index = 0; index < i.length; index++) {
      const element = i[index];
      str += index+1 + ". " + capitalizeFirstLetter(element.name) + "\n";
    }
    return str;
  }

  const OverlayIng = ()=>{
    return(
      <>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip>
           {
             getExt(recipe.extendedIngredients)
          }
          </Tooltip>
        }
      >
       <Numbers>
         {console.log(recipe.extendedIngredients)}
         {recipe.extendedIngredients.length}
       </Numbers>
      </OverlayTrigger>
    </>
    )
  }
  return (
    <CustomContainer>
      <CustomRow url={recipe ? recipe.image : " " }>
        <BadgeCustom pill variant="primary">
          <ClockImg src={Clock} /><Time>{recipe ? recipe.readyInMinutes : null} mins</Time>
        </BadgeCustom>
      </CustomRow>
      <BottomRow>
        <Container>
          <InfoRow>
            <Col xs={8}>
              <RecipeName>
                {recipe ? recipe.title : null}
             </RecipeName>
            </Col>
            <Col>
              {/* <HeartButton onClick={handleClick}> */}
                <LikeButton onClick={()=>handleClick(recipe.id)} src={likeButton} />
                {/* </HeartButton> */}
            </Col>
          </InfoRow>
          <CRow>
            <Summary>
            {recipe ? ValidString(recipe.summary) : null}
            </Summary>
          </CRow>
          <CRow>
            <Col>
              <Numbers>
                {recipe ? ReturnVegan(recipe.vegan) : null}</Numbers><br />
              <SubHeading>
                Vegan
              </SubHeading>
            </Col>
            <Col>
              <Numbers>
                {recipe ? <OverlayIng/> : null}</Numbers><br />
              <SubHeading>
                Missed Ingredients 
              </SubHeading>
            </Col>
          </CRow>
          <CRow>
          <Col>
              <Numbers>
                {recipe ? recipe.servings : null}</Numbers><br />
              <SubHeading>
                Servings
              </SubHeading>
            </Col>
            <Col>
              <Numbers>
                {recipe ? recipe.healthScore : null}</Numbers><br />
              <SubHeading>
              Health Score
              </SubHeading>
            </Col>
          </CRow>
          <Spacer height="2vh"/>
        </Container>
   
      </BottomRow>

    </CustomContainer>
  )
}
export default SingleRecipe;