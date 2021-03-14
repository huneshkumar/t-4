import React from 'react'
import Footer from './Footer'
import ContactComponent from './ContactComponent'

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
import {BiSearchAlt2} from "react-icons/bi"
import NavBar from './NavBar'

function MyCommunity(){
    return(
        <>
        <Flex  minHeight="100vh"  fontFamily="Roboto"  bg="#F9F9F9" direction="column"  align="center">
        <Flex width="90%" direction="row" justify="flex-start">
                    <NavBar/>
                </Flex>
                <Flex  direction="column" justify="center" w="80%" align="center">
                <Heading  mb="11px">
                My Community
            </Heading>
            <Flex w="100%" justify="center" >
            <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiSearchAlt2 color="black"  />}
            />
            <Input type="tel" bg="#E5E5E5" placeholder="Search" />
             </InputGroup>
            </Flex>
            <Box w="100%" mb="50px">
            <ContactComponent keyword="A"/>
              <ContactComponent keyword="B"/>
            </Box>
            


              
                
                </Flex>
                <Flex w="90%">
        <Footer/>
    </Flex>
                
              
        </Flex>
        </>
    )
}

export default MyCommunity