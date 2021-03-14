import React from 'react'
import Footer from './Footer'
import ContactComponent from './ContactComponent'

import {
    Button,
    Tag,
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
import {useQuery} from '@apollo/client'
import {GET_USER} from '../graphql/Quries'

const ContactPerson = (props) => {
    const {loading, error, data}=useQuery(GET_USER, {
        variables: { email: props.email },
      });
    
    let name = data.tat4_members[0].member_first_name
    let session = data.tat4_members[0].member_next_session_id
    let email = data.tat4_members[0].member_email


    return (
        <>
        <Flex  minHeight="100vh"  fontFamily="Roboto"  bg="#F9F9F9" direction="column"  align="center">
        <Flex width="90%" direction="row" justify="flex-start">
                    <NavBar/>
                </Flex>

                <Flex justifyContent="center" align="center" w="100px" height="100px" bg="gray" borderRadius="100%">
                    <Text fontWeight="700" fontSize="18px" color="white">
                        LA
                    </Text>
                </Flex>
                <Flex justifyContent="center" align="center" direction="column">
                    <Text fontWeight="700" m="20px" fontSize="18px">
                    {name}

                    </Text>
                    <Box w="80%" mb="30px">
                    
                    <Tag 
                    m="5px" 
                    fontSize="14px" 
                    border="1px solid #7E7F7E" 
                    bg=" #F9F9F9" py="8px" 
                    px="10px" 
                    borderRadius="22px" 
                    >{name} 
                    </Tag>
                    <Tag 
                    m="5px" 
                    fontSize="14px" 
                    border="1px solid #7E7F7E" 
                    bg=" #F9F9F9" 
                    py="8px" 
                    px="10px" 
                    borderRadius="22px" 
                    >{session}</Tag>
                    <Tag 
                    m="5px" 
                    fontSize="14px" 
                    border="1px solid #7E7F7E" 
                    bg=" #F9F9F9" 
                    py="8px" 
                    px="10px" 
                    borderRadius="22px" 
                    >Data item</Tag>
                    <Tag 
                    m="5px" 
                    fontSize="14px" 
                    border="1px solid #7E7F7E" 
                    bg=" #F9F9F9" 
                    py="8px" 
                    px="10px" 
                    borderRadius="22px" 
                    >Tag section</Tag>
                    <Tag 
                    m="5px" 
                    fontSize="14px" 
                    border="1px solid #7E7F7E" 
                    bg=" #F9F9F9" 
                    py="8px" 
                    px="10px" 
                    borderRadius="22px" 
                    >{email}</Tag>
                    
                    </Box>
                    <Flex 
                    width="100%" 
                    justifyContent="center" 
                    align="center" 
                    direction="row">
                    <Button 
                    type="submit" 
                    mx="10px"  
                    fontWeight="500" 
                    mb="63px" w="50%" 
                    height="44px" 
                    border="1px solid #C7C7C7" 
                    borderRadius="22px" 
                    bg="gray" 
                    color="white">
                   Message
            </Button>
            <Button  type="submit"   fontWeight="500" mb="63px" w="30%" height="44px" border="1px solid #C7C7C7" borderRadius="22px" bg="#F9F9F9" color="#7E7F7E">
                   More
            </Button>
                    </Flex>

                    
                </Flex>


                <Flex w="90%" mt="250px">
        <Footer/>
    </Flex>
                
        </Flex>
        </>
    )
}

export default ContactPerson
