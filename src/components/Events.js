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
import NavBar from './NavBar'
import { useState } from "react";

import { useHistory } from "react-router-dom";


import { FaLinkedin } from "react-icons/all";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Footer from './Footer'

const Events = () => {
    return (
        <Flex  minHeight="100vh" fontFamily="Roboto"  bg="#F9F9F9" direction="column"  align="center">
        <Flex width="90%" direction="row" justify="flex-start">
                    <NavBar/>
                </Flex>
        <Flex  direction="column" justify="center" w="80%" align="center">
        <Heading  mb="11px">
        Events
    </Heading>
    <Text color="#616161" fontSize="14px" textAlign="center" fontWeight={500} mb={37}>
    Book in to secure a place 
    </Text>
    </Flex>
    <Box mb="250px" bg="gray"  w="100%" height="300px">
    <Text color="white" align="center" fontWeight="700" position="relative" top="100px" >
        Comming Soon..
    </Text>
    </Box>
   

    <Flex w="90%">
        <Footer/>
    </Flex>
    </Flex>
    )
}

export default Events
