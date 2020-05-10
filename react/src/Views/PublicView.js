import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
//Plugins
import styled from 'styled-components';
import { NotFound } from '../Components/NotFound';
import { ProtectedRoute } from '../Components/ProtectedRoute';
import HomePage from '../Pages/HomePage';
import LoginPage from "../Pages/LoginPage";
import RandomRecipePage from '../Pages/RandomRecipePage';
import Recipe from '../Pages/Recipe';
import RecipesPage from '../Pages/RecipesPage';
import RecommendedPage from '../Pages/RecommenedPage';
import { Account } from '../utils/Account';




const Container = styled.div`
  min-height:100%;
`

function PublicView(props) {
    return (
      <Container>
        <Account>
          <Switch>
          <Route exact path='/'  component={LoginPage} />
          <Route exact path='/register'  component={LoginPage} />
          <Route exact path="/register/verification" component={LoginPage}/>
          <ProtectedRoute exact path='/home'  component={HomePage} />
          <ProtectedRoute exact path='/recipes'  component={RecipesPage} />
          <ProtectedRoute exact path='/saved-recipes'  component={RecipesPage} />
          <ProtectedRoute exact path='/recipe/:id'  component={Recipe} />
          <ProtectedRoute exact path='/recommended' component={RecommendedPage}/>
          <ProtectedRoute exact path='/taste-your-luck' component={RandomRecipePage}/>
          <Route path="*" component={NotFound}/>
          </Switch>
          </Account>
      </Container>
    )
  }
  export default withRouter(PublicView);
  
  