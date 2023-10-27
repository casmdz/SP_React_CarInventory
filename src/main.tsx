import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './redux/store.ts'

import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './auth/auth0.config.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <HashRouter>
        {/* <Provider store={store}> */}
          <App />
        {/* </Provider> */}
      </HashRouter>
    </Auth0Provider>
  </React.StrictMode>
  ,
)
