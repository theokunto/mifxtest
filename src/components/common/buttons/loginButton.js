import { Button } from "@chakra-ui/react";
import { MdLogin } from "react-icons/md";
const LoginButton = ({ loading }) => {
    return (
        <Button
            type="submit"
            mt={4}
            colorScheme={"telegram"}
            isLoading={loading}
            variant={"solid"}
            leftIcon={<MdLogin/>}
        >
            Login
        </Button>
    )
}
export default LoginButton;