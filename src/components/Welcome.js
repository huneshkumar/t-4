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
    Grid,
    GridItem,
    FormLabel,
    Progress,
    Input,
    Textarea
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"



  
  

const Welcome = () => {
    const { loginWithRedirect } = useAuth0();
    
    const history=useHistory()
    const onClick=()=>{
        history.push('/session1')
    }
    const onSignUp=()=>{
        history.push('/landing')
    }
    return (
        <Flex minHeight="100vh" fontFamily="Roboto"  bg="#F9F9F9" direction="column" justify="center" align="center">
            <Flex  direction="column" justify="center" w="80%" align="center">
            <Heading mt="80px" mb="45px">
                Welcome back
            </Heading>
            <Input
              height="64px" 
              border="none" 
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="Email Address" 
              mb="24px"
              borderRadius="none"
              />
              <Input
              height="64px" 
              border="none" 
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="Email Address" 
              mb="24px"
              borderRadius="none"
              />
              <Text fontSize="12px" lineHeight="18px" color="#525252" mb="24px">
                  Forggot Password ?
              </Text>
              <Button onClick={() => loginWithRedirect()} mb="24px" borderRadius="22px" color="#F9F9F9" height="44px" w="100%" fontSize="16px"  bg="#949494" py="6.5px" >
                  Login
              </Button>
              <Text fontSize="12px" lineHeight="18px" color="#525252" mb="16px">
                    OR
              </Text>
              <Button onClick={onSignUp} mb="24px" borderRadius="22px" color="#F9F9F9" height="44px" w="100%" fontSize="16px"  bg="#949494" py="6.5px" >
                  Sign up with Apple
              </Button>
              <Button onClick={onSignUp} mb="200px" borderRadius="22px" color="#F9F9F9" height="44px" w="100%" fontSize="16px"  bg="#949494" py="6.5px" >
                  Sign up with Facebook
              </Button>
              <Box w="137px"  mb="9px" height="5px" bg="black" borderRadius="100px">
                  
              </Box>
            
            </Flex>
            

        </Flex>
    )
}

export default Welcome
