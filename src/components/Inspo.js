import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Image,
    InputLeftElement,
    FormControl,
    InputGroup,
    Icon,
    Select,
    Grid,
    Box,
    Tag,
    GridItem,
    FormLabel,
    Input
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useState } from "react";

import { useHistory } from "react-router-dom";


import { FaLinkedin } from "react-icons/all";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa/index";
import {AiFillPlayCircle} from 'react-icons/ai'
import {GoBook} from 'react-icons/go'
import {GiSpeaker} from 'react-icons/gi'
import { Progress } from "@chakra-ui/react"
import {setState} from 'react';
import { HamburgerIcon } from '@chakra-ui/icons'
import Footer from './Footer'
import NavBar from './NavBar'

const Inspo = () => {
    return (
        <Flex  minHeight="100vh" fontFamily="Roboto"  bg="#F9F9F9" direction="column"  align="center">
        <Flex width="90%" direction="row" justify="flex-start">
                    <NavBar/>
                </Flex>
        <Flex  direction="column" justify="center" w="80%" align="center">
        <Heading  mb="11px">
        Inspo Staff Picks
    </Heading>
    <Text color="#616161" fontSize="14px" textAlign="center" fontWeight={500} mb={37}>
    Our weekly selection from your recommended
content to watch, read and listen to.
    </Text>
    </Flex>
    <Text fontSize="18px" textAlign="center" fontWeight={500}  mb="11px">
        Must watch
    </Text>

    <Box w="40%" height="150px" bg="gray" mb="30px">
            
    </Box>
    <Flex mb="125px"  direction="row" justify="space-around" w="80%" align="center">
        <Box w="40%">
        <Text fontSize="18px" textAlign="center" fontWeight={500}  mb="11px">
        Must Read
    </Text>

    <Box w="100%" height="150px" bg="gray">
            
    </Box>
        </Box>
        <Box w="40%" >
        <Text fontSize="18px" textAlign="center" fontWeight={500}  mb="11px">
        Must Listen
    </Text>

    <Box w="100%" height="150px" bg="gray">
            
    </Box>
        </Box>


        
        
    </Flex>

    
    
    <Flex w="90%">
        <Footer/>
    </Flex>



    
    </Flex>
    )
}

export default Inspo
