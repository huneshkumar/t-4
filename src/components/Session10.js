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

const Session10 = () => {
    const history=useHistory()
    const onClick=()=>{
        history.push('/')
    }
    

    return (
        <Flex  minHeight="100vh" fontFamily="Roboto"  bg="#F9F9F9" direction="column"  align="center">
                <Flex width="90%" direction="row" justify="flex-start">
                    <NavBar/>
                </Flex>
                <Flex  direction="column" justify="center" w="90%" align="center">
                <Heading fontSize="24px" mt="50px" mb="81px">
                      Great, You’re all done.
                </Heading>
                <Text fontSize="16px" mb="33px" fontWeight="600">
                How was the session today?
                </Text>
                <Flex justifyContent="center" align="center" mb="211px">
                    <RiThumbUpLine size={50}/><Box w={6}/><RiThumbDownLine size={50}/>
                </Flex>
                <Box width="80%" height="88px">
            <Heading  fontSize="24px" textAlign="center" lineHeight="22px"  fontWeight={700} color="#00000"  mb="16px">
               please share to grow our community

            </Heading>
            </Box>
            <Flex mb="70px" width="40%" justifyContent="space-around" wrap="wrap">
                    <ImFacebook2 size={ 30}/><FaTwitterSquare size={30}/><FaInstagramSquare size={30}/>
            </Flex>


            <Button onClick={onClick} type="submit"   fontWeight="500"  w="100%" height="44px" border="1px solid #C7C7C7" borderRadius="22px" bg="#F9F9F9" color="#7E7F7E">
                   Finish
            </Button>
            
            <Box w="137px" mt="50px"  height="5px" bg="black" borderRadius="100px"></Box>


                </Flex>
        </Flex>
    )
}

export default Session10

