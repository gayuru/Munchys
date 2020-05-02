import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
    withRouter
} from 'react-router-dom'

//Plugins
import styled from 'styled-components';
import LoginPage from "../Pages/LoginPage";

import { ProtectedRoute } from '../Components/ProtectedRoute';
import { NotFound } from '../Components/NotFound';
import { Account } from '../utils/Account';
import HomePage from '../Pages/HomePage';
import RecipesPage from '../Pages/RecipesPage';
import Recipe from '../Pages/Recipe';

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
          <Route path="*" component={NotFound}/>
          </Switch>
          </Account>
      </Container>
    )
  }
  export default withRouter(PublicView);
  
  