import {
    Text,
    Box,
    
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom";

function Contact(props){
    return(
        <>
         <Box onClick={props.onClick} mb="20px" w="100%">
         
                <Text  fontWeight="700" align="left">
                    {props.name}
                </Text>
                <Box w="100%" bg="gray" h="1px"></Box>
            </Box>
        </>
    )
}
export default Contact