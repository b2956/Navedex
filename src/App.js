import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import NaversList from './pages/NaversList';
import AddOrEditNaver from './pages/AddOrEditNaver';
import TopBar from './components/TopBar';


const AppContainer = styled.div`
  height: 100vh;
  width: ${ 1280 * window.innerWidth / 1280 };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 ${35 * (window.innerWidth / 1280)}px;
  box-sizing: border-box;
`;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authorizationToken, setAuthorizationToken] = useState('');

  const LoginHandler = ({ email, password }) => {
    setIsLoading(true)

    const requestBody = {
      email,
      password
    }

    fetch('https://navedex-api.herokuapp.com/v1/users/login', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(res => {
        if(res.status === 200) {
          setIsLoggedIn(true);
        }
        return res.json();
      })
      .then(resData => {
        setAuthorizationToken(resData.token);

        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }

  return (
    <AppContainer>
      <Router>
        {(isLoggedIn && !isLoading) && 
          <TopBar setIsLoggedIn={setIsLoggedIn}/>
        }
        <Switch>
          {(!isLoggedIn && !isLoading) &&
            <React.Fragment>
              <Route exact path='/login'>
                <Login LoginHandler={LoginHandler} />
              </Route>
              <Redirect to='/login'/>
            </React.Fragment>
          }
          {(isLoggedIn && !isLoading) && 
            <React.Fragment>
              <Route exact path='/navers-list'>
                <NaversList
                  authorizationToken={authorizationToken}
                />
              </Route>
              <Route exact path='/add-naver'>
                <AddOrEditNaver
                  isEditing={false}
                  authorizationToken={authorizationToken}
                />
              </Route>
              <Route exact path='/edit-naver/:id'>
                <AddOrEditNaver 
                  isEditing={true}
                  authorizationToken={authorizationToken}
                />
              </Route>
              <Redirect to='/navers-list'/>
            </React.Fragment>
          }
          </Switch>
      </Router>
    </AppContainer>
  )
}

export default App;
