import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Welcome from './components/Welcome'
import Session1 from './components/Session1'
import Session5 from './components/Session5'
import Session10 from './components/Session10'
import Landing from './components/Landing'
import GetStarted from './components/GetStarted'
import Zoom from './components/Zoom'
import MyCommunity from './components/MyCommunity'
import ContactPerson from './components/ContactPerson'
import Inspo from './components/Inspo'
import Events from './components/Events'
import NavBar from './components/NavBar'
import Messages from './components/Messages'

import { ApolloClient, InMemoryCache,HttpLink, } from '@apollo/client'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { useAuth0 } from "@auth0/auth0-react";
  import { ApolloProvider } from '@apollo/client';
import Loading from './components/Loading'



  
  
const App = () => {

const client = new ApolloClient({
  uri: 'https://rare-robin-15.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
      "x-hasura-admin-secret":"JD3PfJPjnfU7t96",
  }
});


  const { user, isAuthenticated, isLoading } = useAuth0();
  if(isLoading){
    return <Loading/>
  }
  
 return (
        <>
        <ApolloProvider client={client}>
        <ChakraProvider>


        <Router>
        <Route path="/landing" component={Landing} />
        <Route path="/get-started" component={GetStarted} />
        {isAuthenticated &&(
              
            <>
            
            <Route path="/" exact={true}>
            <Session1 email={user.email}/>
            </Route>
            <Route path="/welcome" component={Welcome} />
            <Route path="/zoom" component={Zoom} />
            <Route path="/session1" component={Session1} />
            
            <Route path="/session5" >
            <Session5 email={user.email}/>
            </Route>
            <Route path="/session10" component={Session10} />
            {/* <Route path="/landing" component={Landing} /> */}
            {/* <Route path="/get-started" component={GetStarted} /> */}
            <Route path="/community" component={MyCommunity} />
            <Route path="/contact-person" >
            <ContactPerson email={user.email}/>
            </Route>
            <Route path="/inspo" component={Inspo} />
            <Route path="/events" component={Events} />
            <Route path="/messages" component={Messages} />
            </>
         
        )}
        {
          !isAuthenticated&&(
              <>      
                <Route path="/" exact={true}>        
                <Welcome/>

                </Route>
        
              </>
          )
        }
         
        
       
        
         </Router>
        </ChakraProvider>
         
        </ApolloProvider>
        </>
    )
}

export default App
