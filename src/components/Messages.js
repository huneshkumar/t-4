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
import Message from './Message'

const Messages = () => {
    return (
        <>
         <Flex  minHeight="100vh"  fontFamily="Roboto"  bg="#F9F9F9" direction="column"  align="center">
        <Flex width="90%" direction="row" justify="flex-start">
                    <NavBar/>
                </Flex>
                <Heading  mb="20px">
                Messages
            </Heading>
            <Message title="Alen" msg="hi aman how are you" />
            <Message title="Aman" msg="hi aman how are you" />
            <Message title="Andrew" msg="hi aman how are you" />
            <Message title="TAnveer" msg="hi aman how are you" />
            <Message title="Bilal" msg="hi aman how are you" />
         </Flex>

        </>
    )
}

export default Messages
