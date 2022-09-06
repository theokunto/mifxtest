import { Flex, Spacer } from "@chakra-ui/react";
import LoginButton from "../../common/buttons/loginButton";

const LoginButtonGroup = ({isLoading}) =>{
    return(
        <Flex>
            <Spacer/>
            <LoginButton loading={isLoading}/>
        </Flex>
    )
};
export default LoginButtonGroup;