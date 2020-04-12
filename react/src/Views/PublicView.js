import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
    withRouter
} from 'react-router-dom'

//Plugins
import styled from 'styled-components';
import LoginPage from "../Pages/LoginPage";
import AdminDashboard from '../Pages/AdminDashboard';
import { ProtectedRoute } from '../Components/ProtectedRoute';
import { NotFound } from '../Components/NotFound';



const Container = styled.div`
  min-height:100%;
`

function PublicView(props) {
    return (
      <Container>
          <Switch>
        {/* <Route exact path='/'  component={() => <FormWrapper form={<Login/>} heading="Log in to your account"/>} /> */}
          <Route exact path='/'  component={LoginPage} />
          <Route exact path='/register'  component={LoginPage} />
          <Route exact path='/dashboard'  component={AdminDashboard} />
          <Route path="*" component={NotFound}/>
          </Switch>
      </Container>
    )
  }
  export default withRouter(PublicView);
  
  