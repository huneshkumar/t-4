import React ,{useState} from 'react'


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
import { MdNotificationsActive } from 'react-icons/md'
import {HiOutlineArchive} from "react-icons/hi"
import {ImBin} from "react-icons/im"
import { useHistory} from "react-router-dom";
import NavBar from './NavBar'
import {useQuery} from '@apollo/client'
import {GET_USER} from '../graphql/Quries'

const Session5 = (props) => {
    const history=useHistory()
    const onClick=()=>{
        history.push('/session10')
    }
    const {loading, error, data}=useQuery(GET_USER, {
        variables: { email: props.email },
      });
    let id = data.tat4_members[0].member_id
    let name = data.tat4_members[0].member_first_name
    let session = data.tat4_members[0].member_next_session_id

 
    
    



    return (
        <Flex  minHeight="100vh" fontFamily="Roboto"  bg="#F9F9F9" direction="column"  align="center">
                <Flex width="90%" direction="row" justify="flex-start">
                    <NavBar/>
                </Flex>
                <Flex  direction="column" justify="center" w="90%" align="center">
                <Box width="80%" mb="52px">
                    <Heading fontWeight="700" color="#141414" lineHeight="31px" fontSize="24px" textAlign="center">
                    Great session!<br/> Add participants and grow your community
                    </Heading>
                </Box>
                <Box width="100%" textAlign="left">
                    {/* <Text mb="5px" align="left" fontWeight="400" lineHeight="16px" fontSize="14px" color="#A6A6A6">
                        Particepent 1
                    </Text> */}
                    <Input
              height="64px" 
              border="none" 
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="Particepent1" 
              mb="5px"
              borderRadius="none"
              />
                    
                    
                </Box>
                <Flex mb="65px" direction="row"  justify="start" width="100%" >
                    <MdNotificationsActive color="#8E8E93" size={30}  /><Box w={6}/><HiOutlineArchive color="#8E8E93" size={30}/><Box w={6}/><ImBin color="#8E8E93" size={30}/>
                </Flex>
                <Text width="100%" mb="15px" align="left" fontWeight="400" lineHeight="16px" fontSize="14px" color="black">
                        Add tags (select)
                    </Text>
                    <Flex direction="row" justify="center" wrap="wrap" mb="20px" >
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >{id}</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >{name}</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >{session}</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    </Flex>
                    <Text width="100%" mb="15px" align="left" fontWeight="400" lineHeight="16px" fontSize="14px" lineHeight="16px" color="#000000">
                        Create a unique tag
                    </Text>
                    <Flex mb="50px" width="100%" wrap="wrap" justifyContent="start">
                    <Button type="submit" py="3px" fontSize="11px"   fontWeight="500" mb={3} w="65%"  border="1px solid #C7C7C7" borderRadius="22px" bg="#F9F9F9" color="#7E7F7E">
                   create a unique tag
                    </Button>
                    </Flex >
                    <Box width="100%" textAlign="left">
                    <Text mb="5px" align="left" fontWeight="400" lineHeight="16px" fontSize="14px" color="#A6A6A6">
                        Note
                    </Text>
                    <Box w="100%" mt="5px" mb="56px" height="1px" bg="#A6A6A6" ></Box>
                    
                </Box>
                <Button onClick={onClick} type="submit"   fontWeight="500" mb="8px" w="100%" height="44px" border="1px solid #C7C7C7" borderRadius="22px" bg="#F9F9F9" color="#7E7F7E">
                   Next
            </Button>

                    

           
            
            <Box w="137px" mt="50px"  mb="9px" height="5px" bg="black" borderRadius="100px"></Box>


                </Flex>
        </Flex>
    )
}

export default Session5

