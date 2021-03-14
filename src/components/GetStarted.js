
import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    Image,
    InputLeftElement,
    FormControl,
    InputGroup,
    Icon,
    Select,
    Grid,
    Box,
    Tag,
    GridItem,
    FormLabel,
    Input
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useState } from "react";

import { useHistory } from "react-router-dom";


import { FaLinkedin } from "react-icons/all";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa/index";
import {AiFillPlayCircle} from 'react-icons/ai'
import {GoBook} from 'react-icons/go'
import {GiSpeaker} from 'react-icons/gi'
import { Progress } from "@chakra-ui/react"
import {setState} from 'react';
import { gql, useQuery } from '@apollo/client'
import {useMutation} from '@apollo/client'



function GetStarted() {
    const history = useHistory();
    const [value, setValue] = useState(20);
    const [step, setStep] = useState(1);
    const [text, setText] = useState("What would you like to get from your Brand/T@4 experience")
   
   const handleSubmit=(event)=>{
        event.preventDefault()
        alert('submitted')
   }
    
  
    const next = () => {
        
        setValue(value + 14.2851143);
        setStep(step + 1)
        console.log(step);
        if(step == 1) {
            
            setText("You & your work")
        } else if (step === 2 ){
            
            setText("your Interests")
        } else if ( step === 3 ) {
            setText("....and a little extra about you")

        } else if(step === 4){
            setText("Our events always start at 1pm and last for 30 minutes");
            
        } else if(step === 5){
            setText("Create your Account")
            // history.push("/home")
        }
        else if(step === 6){
            setText("Great job")
          
            
            
            
            // history.push("/home")
        }
        else if(step === 7){
           
            history.push("/")
        }
        
    }

    const REGISTERUSER=gql`
    
    mutation adduser(
        $fname: String!, 
        $sname: String!, 
        $email: String!, 
        $password: String!) 
        {
        insert_tat4_members_one(
          object: {
            member_id:8
            member_next_session_id:22
            member_mobile:3363109787
            member_first_name: $fname, 
            member_surname: $sname, 
            member_email: $email, 
            member_password: $password
          }) {
          member_email
          member_first_name
          member_id
          member_password
          member_surname
          member_mobile
          member_next_session_id
        }
        }

    
    `
   
    

   

    return (
        
        <>
        
        <Flex px={3}  py={4} justify="center" minH="100vh" w="100%" overflowX="hidden">
            <Stack p={0} w="80%"  borderRadius="lg" >
            <Stack pb={4} px={5}>
                <Text fontWeight="700">{step}/7 </Text>
                <Progress colorScheme="gray" size="xs" value={value} />    
            </Stack>    
           
            {
                step === 1 &&
                <Stack textAlign="center" spacing="5">
                    
                    <Text fontSize="16pt" fontWeight="700" textColor="gray.600">
                    {text}
                    </Text>

                    <Text  fontWeight="700" mb="54px" textColor="#979797">
                    Choose as many as you like from below
                    </Text>
                
                    <Box border="2px" borderRadius="8px" borderColor="#979797" onClick={next} _hover={{bg:"primary"}} cursor="pointer">
                        <Stack textAlign="center" p={2} spacing={1}>
                            <Text fontSize="16px" fontWeight="500" textColor="#979797">
                            Newtworking with people from similar professions
                            </Text>

                            
                    
                        </Stack>
                    </Box>

                    <Box border="2px" borderRadius="8px" borderColor="#979797" onClick={next} _hover={{bg:"primary"}} cursor="pointer">
                        <Stack textAlign="center" p={2} spacing={1}>
                            <Text fontSize="16px" fontWeight="500" textColor="#979797">
                            Newtworking with people from similar industry sectors
                            </Text>

                            
                    
                        </Stack>
                    </Box>

                    <Box border="2px" borderRadius="8px" borderColor="#979797" onClick={next} _hover={{bg:"primary"}} cursor="pointer">
                        <Stack textAlign="center" p={2} spacing={1}>
                            <Text fontSize="16px" fontWeight="500" textColor="#979797">
                            Newtworking with people who share similar interests
                            </Text>

                            
                    
                        </Stack>
                    </Box>

                    <Box border="2px" mb="77px" borderRadius="8px" borderColor="#979797" onClick={next} _hover={{bg:"primary"}} cursor="pointer">
                        <Stack textAlign="center" p={2} spacing={1}>
                            <Text fontSize="16px" fontWeight="500" textColor="#979797">
                            Networking with people from different professions, and sectors
                            </Text>

                            
                    
                        </Stack>
                    </Box>

                    

                    <Button textColor="black" 
                    variant="outline" 
                    shadow="lg"  
                    size="lg"
                    borderRadius="30px"
                    bg="primary"
                    position="absolute"
                    bottom="40px"
                    alignSelf="center"
                    w="80%"
                    border="2px"
                    _hover={{bg:"secondary"}}
                    onClick={next}
                    >
                    Continue
                </Button>
                <Flex w="100%" position="absolute" bottom="10px" justify="center"><Box w="137px" mt="40px"  height="5px" bg="black" borderRadius="100px"></Box></Flex>
                </Stack>
            }


            {
                step === 2 &&
                <Stack textAlign="center" spacing="5">
                    
                <Text fontSize="22px" fontWeight="700"  textColor="#141414">
                    {text}
                </Text>

                <Stack spacing="0" align="center">
                <FormControl id="firstName" my={4} >
                <Input
              height="64px" 
              border="none" 
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="Enter your First name" 
              name="fname"
              
              borderRadius="none"
              />
             
              </FormControl>
              <FormControl id="surName" my={4} >
                <Input
              height="64px" 
              border="none" 
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="Enter your surname" 
              name="sname"
              
              borderRadius="none"
              />
             
              </FormControl>
              <FormControl id="profession" my={4}>
                <Select
              height="64px" 
              border="none" 
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="profession" 
             
              borderRadius="none"
              />
             
              </FormControl>
              <FormControl id="profession" my={4}>
                <Select
              height="64px" 
              border="none" 
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="Specialisms" 
              
              borderRadius="none"
              />
             
              </FormControl>
              <FormControl id="industry" mb="140px">
                <Select
              height="64px" 
              border="none" 
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="Industry" 
              
              borderRadius="none"
              />
             
              </FormControl>
              
              

                </Stack>
                <Button textColor="black" 
                    variant="outline" 
                    shadow="lg"  
                    size="lg"
                    borderRadius="30px"
                    bg="primary"
                    position="absolute"
                    bottom="40px"
                    alignSelf="center"
                    w="80%"
                    border="2px"
                    _hover={{bg:"secondary"}}
                    onClick={next}
                    >
                    Continue
                </Button>
                <Flex w="100%" position="absolute" bottom="10px" justify="center"><Box w="137px" mt="40px"  height="5px" bg="black" borderRadius="100px"></Box></Flex>



            </Stack>

            }


            {
                step === 3 &&
                <Flex justify="center" direction="column" alignItems="center" w="100%">
                    <Flex justify="center" direction="column" alignItems="center" w="100%">
                    <Text fontSize="22px" fontWeight="700"  textColor="#141414">
                    {text}
                </Text>
                <Text  fontSize="14px" fontWeight="500" mb="35px" textColor="#979797">
                    Choose as many as you like from below
                    </Text>
                    <Box w="100%" mb="30px">
                    <Text  fontSize="18px" fontWeight="700" mb="35px" textColor="black">
                    Intrest Category
                    </Text>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag </Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Data item</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    
                    </Box>
                    <Box w="100%" mb="30px">
                    <Text  fontSize="18px" fontWeight="700" mb="35px" textColor="black">
                    Intrest Category
                    </Text>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag </Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Data item</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    
                    </Box>
                    <Box w="100%" mb="30px">
                    <Text  fontSize="18px" fontWeight="700" mb="35px" textColor="black">
                    Intrest Category
                    </Text>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag </Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Data item</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                    
                    </Box>

                    </Flex>
                   
                    <Button textColor="black" 
                    variant="outline" 
                    shadow="lg"  
                    size="lg"
                    borderRadius="30px"
                    bg="primary"
                    position="absolute"
                    bottom="40px"
                    alignSelf="center"
                    w="80%"
                    border="2px"
                    _hover={{bg:"secondary"}}
                    onClick={next}
                    >
                    Continue
                </Button>
                <Flex w="100%" position="absolute" bottom="10px" justify="center"><Box w="137px" mt="40px"  height="5px" bg="black" borderRadius="100px"></Box></Flex>


                </Flex>
            }


            {
                step === 4 &&
                <Flex justify="center" direction="column" alignItems="center" w="100%">
                <Flex justify="center" direction="column" alignItems="center" w="100%">
                <Text fontSize="22px" fontWeight="700" textAlign="center" textColor="#141414">
                {text}
            </Text>
            <Text  fontSize="14px" fontWeight="500" mb="35px" textColor="#979797">
            We’d love you to tell us a little more 
(but it’s not essesntial)
                </Text>
                 
                 <Box className="recommend" w="100%" pb="42px">
                 <Text  fontSize="14px" fontWeight="700" mb="15px" textColor="black">
                 Something you recommend to watch
                </Text>
                <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiFillPlayCircle size={20} color="black" />}
                   />
                <Input bg="#E5E5E5" type="tel" placeholder="" />
                </InputGroup>
                    
                 </Box>
                 <Box className="recommend" pb="42px" w="100%">
                 <Text  fontSize="14px" fontWeight="700" mb="15px" textColor="black">
                 Something you recommend to Lisren
                </Text>
                <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<GiSpeaker size={20} color="black" />}
                   />
                <Input bg="#E5E5E5" type="tel" placeholder="" />
                </InputGroup>
                    
                 </Box>
                 <Box className="recommend" pb="180px" w="100%">
                 <Text  fontSize="14px" fontWeight="700" mb="15px" textColor="black">
                 Something you recommend to Read
                </Text>
                <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<GoBook size={20} color="black" />}
                   />
                <Input bg="#E5E5E5" type="tel" placeholder="" />
                </InputGroup>
                    
                 </Box>
                
                </Flex>
               
                <Button textColor="black" 
                    variant="outline" 
                    shadow="lg"  
                    size="lg"
                    borderRadius="30px"
                    bg="primary"
                    alignSelf="center"
                    w="100%"
                    border="2px"
                    _hover={{bg:"secondary"}}
                    onClick={next}
                    >
                    Continue
                </Button>
                <Flex w="100%" justify="center"><Box w="137px" mt="40px"  height="5px" bg="black" borderRadius="100px"></Box></Flex>


            </Flex>
            }

            
            {
                step === 5 &&

                <Flex justify="center" direction="column" alignItems="center" w="100%">
                <Flex justify="center" direction="column" alignItems="center" w="100%">
                <Text fontSize="22px" fontWeight="700" textAlign="center" textColor="#141414">
                {text}
            </Text>
            <Text  fontSize="14px" fontWeight="500" mb="35px" textColor="#979797">
            We’d love you to tell us a little more 
                </Text>
                <Flex py="10px" direction="column" align="center" justifyContent="center">
                <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                <Tag m="5px" fontSize="14px" border="1px solid #7E7F7E" bg=" #F9F9F9" py="8px" px="10px" borderRadius="22px" >Tag section</Tag>
                </Flex>
                 

                </Flex>
               
                <Button textColor="black" 
                    variant="outline" 
                    shadow="lg"  
                    size="lg"
                    borderRadius="30px"
                    bg="primary"
                    position="absolute"
                    bottom="40px"
                    alignSelf="center"
                    w="80%"
                    border="2px"
                    _hover={{bg:"secondary"}}
                    onClick={next}
                    >
                    Continue
                </Button>
                <Flex w="100%" position="absolute" bottom="10px" justify="center"><Box w="137px" mt="40px"  height="5px" bg="black" borderRadius="100px"></Box></Flex>


            </Flex>
                
            }
                 {
                step === 6 &&

                <Flex justify="center" direction="column" alignItems="center" w="100%">
                <Flex justify="center" direction="column" alignItems="center" w="100%">
                <Text fontSize="22px" fontWeight="700" textAlign="center" textColor="#141414">
                {text}
            </Text>
            <Text  fontSize="14px" fontWeight="500" mb="35px" textColor="#979797">
            We’d love you to tell us a little more 
                </Text>
                <FormControl >
            <Input
              height="64px" 
              border="none" 
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="Email Address" 
              name="email"
           
              mb="24px"
              borderRadius="none"
              />
              <Input
              height="64px" 
              border="none" 
              type="password"
              color="#141414" 
              borderBottom="1px solid #141414" 
              placeholder="Password"
              name="password" 
             
              mb="24px"
              borderRadius="none"
              />
              </FormControl>
              <Text fontSize="12px" lineHeight="18px" color="#525252" mb="40px">
              By continuing you are agreeing to Nest’d <strong>terms and conditions</strong> and <strong>privacy policy</strong>.
              </Text>
              <Button  type="submit"  onClick={next} mb="24px" borderRadius="22px" color="#F9F9F9" height="44px" w="100%" fontSize="16px"  bg="#949494" py="6.5px" >
                  Login
              </Button>
              <Text fontSize="12px" lineHeight="18px" color="#525252" mb="16px">
                    OR
              </Text>
              <Button mb="24px" borderRadius="22px" color="#F9F9F9" height="44px" w="100%" fontSize="16px"  bg="#949494" py="6.5px" >
                  Sign up with Apple
              </Button>
              <Button  borderRadius="22px" color="#F9F9F9" height="44px" w="100%" fontSize="16px"  bg="#949494" py="6.5px" >
                  Sign up with Facebook
              </Button>

            
                </Flex>
               
        
                <Flex w="100%" position="absolute" bottom="10px" justify="center"><Box w="137px" mt="40px"  height="5px" bg="black" borderRadius="100px"></Box></Flex>


            </Flex>
                
            }
                 {
                step === 7 &&

                <Flex justify="center" direction="column" alignItems="center" w="100%">
                <Flex justify="center" direction="column" alignItems="center" w="100%">
                <Text fontSize="22px" fontWeight="700" textAlign="center" mt="60px" textColor="#141414">
                {text}
            </Text>
            <Text  textAlign="center" fontSize="18px" fontWeight="700" mb="35px" textColor="black">
            
You can now look forward to receiving an invite for your first  session
                </Text>
                <Box width="80%" position="absolute" bottom="110px">
                    <Text mb="6px" textAlign="center" fontWeight="700" fontSize="18px">
                    Building our beautiful community
                    </Text>
                    <Text color="#525252" textAlign="center" fontWeight="700" fontSize="18px">
                    Always be Respectful Be Open Minded Be Inclusive
                    </Text>
                </Box>
             
                 

                </Flex>
               
                <Button textColor="black" 
                    variant="outline" 
                    shadow="lg"  
                    size="lg"
                    borderRadius="30px"
                    bg="primary"
                    position="absolute"
                    bottom="40px"
                    alignSelf="center"
                    w="80%"
                    border="2px"
                    _hover={{bg:"secondary"}}
                    onClick={next}
                    >
                    Continue
                </Button>
                
                <Flex w="100%" position="absolute" bottom="10px" justify="center"><Box w="137px" mt="40px"  height="5px" bg="black" borderRadius="100px"></Box></Flex>


            </Flex>
                
            }
                {/* <Button textColor="black" 
                        variant="outline" 
                        shadow="lg"  
                        size="lg"
                        borderRadius="30px"
                        bg="primary"
                        alignSelf="center"
                        w="65vw"
                        border="2px"
                        // onClick={signup}
                        onClick={() => {
                            setValue(value + 20);
                            setStep(step + 1)
                        }}
                        _hover={{bg:"secondary"}}
                        >
                        Continue
                    </Button> */}
            
            </Stack>
            
        
        </Flex>
        
        </>

    )
}

export default GetStarted;
