import React from 'react'
import Footer from './Footer'
import { useAuth0 } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react"
import {useQuery} from '@apollo/client'
import {GET_USER} from '../graphql/Quries'
import '../index.js'




import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {
    Button,
    Flex,
    Heading,
    Stack,
    Spacer,
    Text,
    Image,
    InputLeftElement,
    FormControl,
    Box,
    InputGroup,
    Icon,
    Grid,
    GridItem,
    FormLabel,
    Progress,
    Input,
    Textarea
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom";
import NavBar from './NavBar'
import Welcome from './Welcome'
import Session5 from './Session5'
import Session10 from './Session10'
import Landing from './Landing'
import GetStarted from './GetStarted'
import Zoom from './Zoom'
import MyCommunity from './MyCommunity'
import ContactPerson from './ContactPerson'
import Inspo from './Inspo'
import Events from './Events'

import Messages from './Messages'
import {useState} from 'react'
import Loading from './Loading';



const Session1 = (props) => {




    const [joinMeeting, setJoinMeeting]=useState(false)




    const { logout } = useAuth0();
   
    
    const history=useHistory()
    const onClick=()=>{
        history.push('/zoom')
    }
    const back=()=>{
        history.push('/landing')
    }
    const {loading, error, data}=useQuery(GET_USER, {
        variables: { email: props.email },
      });
 
     if(loading) {
        return (
            <Loading/>
        )
    }
  
      let theId = data.tat4_members[0].member_id
      let name=data.tat4_members[0].member_first_name
      let session_id=data.tat4_members[0].member_next_session_id

//       {joinMeeting?<Zoom/>:(
//         <button onClick={()=>setJoinMeeting(true)} >join</button>
//     )
// }

  
    
    return (
        
        <>
             {joinMeeting?<Zoom/>:(
                

                <Flex  minHeight="100vh" fontFamily="Roboto"  bg="#F9F9F9" direction="column"  align="center">
                <Flex width="90%" direction="row" justify="flex-start">
                    <NavBar name={name} />
                </Flex>
                <Flex  direction="column" justify="center" w="80%" align="center">
                <Heading  mb="11px">
                    hi {name}
                     {/* hi {data.tat4_members[theId-1].member_first_name} */}
                {/* Hi {data.tat4_members[2].member_first_name} */}
            </Heading>
            <Text color="#616161" fontSize="14px" fontWeight={500} mb={37}>
            {props.session}
            </Text>
            <Heading height="28px"  fontWeight="bold" color="#141414"  mb={30}>

                    {/* {data.tat4_members[2].member_next_session_id}
                    {console.log(data.tat4_members[0].member_mobile)} */}
                    {session_id}
            </Heading>
            <Button onClick={()=>setJoinMeeting(true)} type="submit"  color="#7E7F7E" fontWeight="500" mb={13} w="100%" height="44px" border="1px solid #C7C7C7" borderRadius="22px" bg="#F9F9F9" >
                   Yes book me in
            </Button>
            <Button onClick={back} type="submit"   fontWeight="500" mb="63px" w="100%" height="44px" border="1px solid #C7C7C7" borderRadius="22px" bg="#F9F9F9" color="#7E7F7E">
                   Sorry i can't
            </Button>
            <Heading   fontSize="24px"  fontWeight={700} color="#141414"  mb={11}>
                    Here's your session link
            </Heading>
            
            <Button type="submit" py="3px" fontSize="11px"    fontWeight="500" mb={3} w="65%"  border="1px solid #C7C7C7" borderRadius="22px" bg="#F9F9F9" color="#7E7F7E">
                   Yes book me in
            </Button>
            <Text color="#616161" fontSize="14px" fontWeight={500} mb="45px">
            Add to calender?
            </Text>
            <Heading  fontSize="18px"  fontWeight={700} color="#141414"  mb={11}>
            Building our beautiful community
            </Heading>
            <Box height="88px" mb="50px">
            <Heading  fontSize="18px" textAlign="center" lineHeight="22px"  fontWeight={700} color="#525252"  mb={3}>
            Always be Respectful<br/>
                Be Open Minded<br/>
                Be Inclusive

            </Heading>
            </Box>
           


                </Flex>
                <Flex w="90%">
        <Footer/>
    </Flex>
        </Flex>
            )
        }



                
        </>
       
    )
}

export default Session1
