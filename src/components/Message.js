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

const Message = (props) => {
    return (
        <Flex w="90%" mb="15px" >
        <Flex ml="" w="20%" justifyContent="center" align="center" w="50px" height="50px" bg="black" borderRadius="100%">
                <Text fontWeight="700" fontSize="18px" color="white">
                    LA
                </Text>
        </Flex>
        <Flex ml="20px" direction="column" justify="flex-start" >
                <Heading  fontWeight="700" fontSize="18px" color="black">
                    {props.title}
                </Heading>
                <Text fontWeight="700" fontSize="18px" color="gray">
                    {props.msg}
                </Text>
                </Flex>

        </Flex>
    )
}

export default Message
