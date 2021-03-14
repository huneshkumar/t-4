import React from 'react'
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


const Screen = () => {
    return (
        <Box w="50%" bg="black" h="38vh" border="2px solid green" >
            <video width="100%"  height="240">
         <source src="../public/media/zoom.mkv" type="video/mkv"/>
         <h1>person</h1>
  

</video>

        </Box>
    )
}

export default Screen
