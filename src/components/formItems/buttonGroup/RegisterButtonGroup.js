import { Flex, Spacer } from "@chakra-ui/react";
import CancelButton from "../../common/buttons/cancelButton";
import RegisterButton from "../../common/buttons/registerButton";

const RegisterButtonGroup = ({onCancel,isLoading}) =>{
    return(
        <Flex >
            <Spacer/>
            <CancelButton onCancel={onCancel}/>
            <RegisterButton loading={isLoading}/>
        </Flex>
    )
};
export default RegisterButtonGroup;