import React from 'react'
import Footer from './Footer'

import {
    Button,
    Flex,
    Heading,
    Box,
   
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom";
import Contact from "./Contact"

const ContactComponent = (props) => {
    const history=useHistory()
    const onClick=()=>{
        history.push('/contact-person')
    }
    return (
        <Box width="100%" p="10px" w="100%">
        <Heading pl="10px" bg="#C4C4C4">
            {props.keyword}
        </Heading>
        <Flex w="80%"   align="center" direction="column" p="10px">
        <Contact onClick={onClick} name="Ali"/>
          <Contact onClick={onClick} name="Anthony"/>
          <Contact onClick={onClick} name="Aman"/>
          <Contact onClick={onClick} name="Ajkm"/>
        </Flex>
        
    </Box>
    )
}

export default ContactComponent
