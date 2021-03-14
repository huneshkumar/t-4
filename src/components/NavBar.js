import { React, useState, useRef } from "react";
import { Box, Flex, Text, Button, Stack, useDisclosure } from "@chakra-ui/react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { ArrowBackIcon } from '@chakra-ui/icons'
  import { useHistory } from 'react-router-dom';
  import NavItem from './NavItem'
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Heading,
    DrawerCloseButton,
    Input
  } from "@chakra-ui/react"
  import { Icon } from "@chakra-ui/react";
  import { FaUser, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa/index";
  import {useQuery} from '@apollo/client'
import {GET_USER} from '../graphql/Quries'
  // import {auth} from '../firebase'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
  import { HamburgerIcon } from '@chakra-ui/icons'
  import { useAuth0 } from "@auth0/auth0-react";

function NavBar(props) {
  const { logout } = useAuth0();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const history=useHistory()
    const onClick=()=>{
        history.push('/contact-person')
    }
    const onMessage=()=>{
        history.push('/messages')
    }
  //   const {loading, error, data}=useQuery(GET_USER, {
  //     variables: { email: props.email },
  //   });
  // let id = data.tat4_members[0].member_id
  // let name = data.tat4_members[0].member_first_name
  
    return (
      <>
    
        <Flex width="100%" direction="row" justify="flex-start">
            <HamburgerIcon w="30px" height="30px" mt="10px" onClick={onOpen} />
        </Flex>
        <Drawer  onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader  bg="black" borderBottomWidth="1px">
              <Flex w="100%" justify="center" align="center">
                <Flex justifyContent="center" align="center" w="100px" height="100px" bg="white" borderRadius="100%">
                    <Text fontWeight="700" fontSize="18px" color="black">
                        LA
                    </Text>
                </Flex>
                <Text ml="10px" fontWeight="700" fontSize="18px" color="white">
                        {props.name}
                    </Text>
                </Flex>
                <Flex>
                    <Box onClick={onMessage} >
                <Text ml="20px"  mt="20px"fontWeight="700" fontSize="18px" color="white">
                        Messages      
                    </Text>
                    </Box>
                </Flex>
              </DrawerHeader>
              <DrawerBody >
                  <Flex w="100%" direction="column" p="20px">
                      <NavItem profile={onClick} title="My Profile"/> 
                      <NavItem title="Contact us"/> 
                      <NavItem title="Privacy"/> 
                      <Button type="submit" py="3px" fontSize="11px" onClick={() => logout({ returnTo: window.location.origin })}   fontWeight="500" mb={3} w="65%"  border="1px solid #C7C7C7" borderRadius="22px" bg="#F9F9F9" color="#7E7F7E">
                   Logout
            </Button>
                  </Flex>
               
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  export default NavBar