import React from 'react'
import Footer from './Footer'
import { useAuth0 } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react"
import {useQuery} from '@apollo/client'
import {GET_USER} from '../graphql/Quries'
import '../index.js'
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

const Loading = () => {
    return (
       <>
       <Flex display="flex" justifyContent="center" direction="column" alignItems="center" height="100vh" bg="black">
           <Heading color="white" mb="10px">
               T@4 app
           </Heading>
           <Text color="white">
               Loading...
           </Text>
       </Flex>
       </>

    )
}

export default Loading
