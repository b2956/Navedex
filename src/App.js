import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import NaversList from './pages/NaversList';
import AddOrEditNaver from './pages/AddOrEditNaver';


const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route path='/login' exact>
            <Login/>
          </Route>
          <Route path='/navers-list' exact>
            <NaversList/>
          </Route>
          <Route path='add-naver' exact>
            <AddOrEditNaver/>
          </Route>
          <Route path='edit-naver/:id' exact>
            <AddOrEditNaver 
              isEditing={true}
            />
          </Route>
          <Redirect to={isLoggedIn ? '/navers-list' : '/login'}/>
          </Switch>
      </Router>
    </AppContainer>
  )
}

export default App;
