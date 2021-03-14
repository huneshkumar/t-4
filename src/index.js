import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react"
import { useHistory } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
    <Auth0Provider
    domain="dev-dn5yiu8i.us.auth0.com"
    clientId="Trbw6INTAJRPGdQehzClI8mp4eFPux2e"
    redirectUri={window.location.origin}
   
  >
    <App />
  </Auth0Provider>
  ,document.getElementById('root'))