import React from 'react'
import '../index.css'
import { BsFillTriangleFill } from 'react-icons/bs'
import { FiHexagon } from 'react-icons/fi'
import { Icon } from "@chakra-ui/react"
import Seesion1 from "./Session1"
import { useHistory } from "react-router-dom";
import NavBar from './NavBar'

import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Box,
    Image,
    InputLeftElement,
    FormControl,
    InputGroup,
    Grid,
    GridItem,
    FormLabel,
    Input
} from "@chakra-ui/react";

const Footer = () => {
    const history=useHistory()
    const onClick=()=>{
        history.push('/')
    }
    const onMc=()=>{
        history.push('/community')
    }
    const OnInspo=()=>{
        history.push('/inspo')
    }
    const OnEvents=()=>{
        history.push('/Events')
    }
    return (
        <>
             <Flex
            bg="white"
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            px="15px"
            py="15px"
            mx={4}
            position="relative"
            bottom="10px"
           
            
            bg="#EBEBEB"
            borderRadius={10}
            mb="10px"
            w="100%"
            borderRadius="20px"
            mb={3}
           
            
            
            


        >
                <Flex spacing={0} cursor="pointer" onClick={onClick} >
                    <Stack spacing={0} >
                    <Icon h={7} w={7}   as={BsFillTriangleFill}  alignSelf="center"/>
                    <Text textAlign="center">Home</Text>     
                    </Stack>               
                </Flex>
                <Flex spacing={0} onClick={onMc} cursor="pointer" >
                    <Stack spacing={0} >
                    <Icon h={7} w={7}   alignSelf="center"/>
                    <Text textAlign="center">My community</Text>     
                    </Stack>               
                </Flex>
                <Flex spacing={0} onClick={OnInspo} cursor="pointer" >
                    <Stack spacing={0} >
                    <Icon h={7} as={FiHexagon} w={7}   alignSelf="center"/>
                    <Text textAlign="center">Inspo</Text>     
                    </Stack>               
                </Flex>

                <Flex onClick={OnEvents} spacing={0} cursor="pointer" >
                    <Stack spacing={0}>
                    <Icon h={7} w={7}   alignSelf="center"/>
                    <Text textAlign="center">Events</Text>     
                    </Stack>               
                </Flex>

        </Flex>
        </>
    )
}

export default Footer
