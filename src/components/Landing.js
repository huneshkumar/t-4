import React from 'react'


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
    Tag,
    Grid,
    GridItem,
    FormLabel,
    Progress,
    Input,
    Textarea
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { RiThumbUpLine,RiThumbDownLine } from 'react-icons/ri'
import {FaTwitterSquare,FaInstagramSquare} from "react-icons/fa"
import {ImFacebook2} from "react-icons/im"
import { useHistory } from "react-router-dom";
import NavBar from './NavBar'

const Landing = () => {
    const history=useHistory()
    const onClick=()=>{
        history.push('/get-started')
    }
    return (
        <Flex  minHeight="100vh" fontFamily="Roboto"  bg="#F9F9F9" direction="column"  align="center">
               <Flex width="90%" direction="row" justify="flex-start">
                    <NavBar/>
                </Flex>
                <Flex  direction="column" justify="center" w="90%" align="center">
               



                <Box width="80%" mt="472px" height="88px" mb="20px">
            <Heading  fontSize="24px" textAlign="center" lineHeight="31px"  fontWeight={700} color="#00000"  >
            Rewarding networking without the pain.<br/> 30 minutes. 1pm. Done.

            </Heading>
            </Box>
            <Box textAlign="center" w="80%">
            <Text fontWeight="500" fontSize="14px" color="#616161" mb="67px">
            Morbi leo risus, porta ac consectetur a c, vestibulum at eros.
            </Text>
            </Box>


            <Button onClick={onClick} type="submit"   fontWeight="500"  w="100%" height="44px" border="1px solid #C7C7C7" borderRadius="22px" bg="#F9F9F9" color="#7E7F7E">
                   Lets get started
            </Button>
            
            <Box w="137px" mt="26px"  height="5px" bg="black" borderRadius="100px"></Box>


                </Flex>
        </Flex>
    )
}

export default Landing

