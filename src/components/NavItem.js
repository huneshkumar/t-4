import { React, useState, useRef } from "react";
import { Box, Flex, Text, Button, Stack, useDisclosure } from "@chakra-ui/react";
import  {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

const NavItem = (props) => {
    return (
        <>
        <Stack onClick={props.profile}>
                      <Link >
                     <Text ml="20px"  mt="20px"fontWeight="700" fontSize="18px" color="gray">
                        {props.title}     
                    </Text>
                    </Link>
                      </Stack>
        </>
    )
}

export default NavItem
