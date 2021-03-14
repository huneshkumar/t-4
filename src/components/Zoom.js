// import React from 'react'
// import {
//     Button,
//     Flex,
//     Heading,
//     Stack,
//     Text,
//     Image,
//     InputLeftElement,
//     FormControl,
//     InputGroup,
//     Icon,
//     Select,
//     Grid,
//     Box,
//     Tag,
//     GridItem,
//     FormLabel,
//     Input
// } from "@chakra-ui/react";
// import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
// import { useState } from "react";

// import { useHistory } from "react-router-dom";
// import Screen from './Screen'


// import { FaLinkedin } from "react-icons/all";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

// const Zoom = () => {
//     const history=useHistory()
//     const onClick=()=>{
//         history.push('/session5')
//     }
//     return (
//        <>
//        <Flex justify="center" h="100vh" align="center" width="100%" direction="column">
//        <Flex bg="gray" id="uper-screen" justify="center" align="center" width="100%" direction="row">
//            <Button onClick={onClick} type="submit" bg="red"m="3px" color="white" >End</Button>
//        </Flex>
           
//            <Flex id="uper-screen" justify="center" align="center" width="100%" direction="row">
//                 <Screen/>
//                 <Screen/>
//            </Flex>
//            <Box bg="gray" p="5">
//                <Text align="center" fontSize="14px" fontWeight="500" color="white">
//                Hi, I’m  your virtual host. Lets get started. 
//                 would you like to tell everyone about yourself,  remember you’ve only got a minute!”
//                </Text>
//            </Box>
//            <Flex id="lower-screen" justify="center" align="center" width="100%" direction="row">
//            <Screen/>
//                 <Screen/>
//            </Flex>
//            <Flex bg="gray" id="uper-screen" justify="space-around" align="center" width="100%" direction="row">
//            <Button type="submit" bg="green"m="3px" >mic</Button>
//            <Button type="submit" bg="green"m="3px" >mute</Button>
//            <Button type="submit" bg="green"m="3px" >msg</Button>
//            <Button type="submit" bg="green"m="3px" >emo</Button>
//        </Flex>
//        </Flex>
//        </>
//     )
// }

// export default Zoom



import React from 'react'
import { ZoomMtg } from '@zoomus/websdk'
import {useEffect} from 'react'


const crypto = require('crypto') // crypto comes with Node.js

function generateSignature(apiKey, apiSecret, meetingNumber, role) {
return new Promise((res,rej)=>{
     // Prevent time sync issue between client signature generation and zoom 
  const timestamp = new Date().getTime() - 30000
  const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
  const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
  const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')

  res(signature)
})
 
}



var apiKey = 'S8shNX33QyirY-s1olOt5w'
var apiSecret="HfeOthKO26lIRrECbG7oBzDZfWpLUjImBJjK"
var meetingNumber = 75154611061
var role = 0
var leaveUrl = '/session5'
var userName = 'WebSDK'
var userEmail = "huneshk@gmail.com"
var passWord = 'iA47ak'
var signature = ""
generateSignature(apiKey, apiSecret, meetingNumber, role).then((res)=>{
signature=res
}) //need to generate based on meeting id

const Zoom = () => {
    //loading zoom libreries
    useEffect(() => {
        showZoomDiv()
        ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av'); 
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk()
        initateMeeting()
    }, [])
    const showZoomDiv=()=>{
        document.getElementById('zmmtg-root').style.display="block"
    }

    const initateMeeting=()=>{
        ZoomMtg.init({
            leaveUrl: leaveUrl,
            isSupportAV: true,
            success: (success) => {
              console.log(success)
          
              ZoomMtg.join({
                signature: signature,
                meetingNumber: meetingNumber,
                userName: userName,
                apiKey: apiKey,
                userEmail: userEmail,
                passWord: passWord,
                success: (success) => {
                  console.log(success)
                },
                error: (error) => {
                  console.log(error)
                }
              })
          
            },
            error: (error) => {
              console.log(error)
            }
          })
    }



    return (
        <div>
            <h1>zoom</h1>
        </div>
    )
}

export default Zoom

