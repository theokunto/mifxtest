import { Button } from "@chakra-ui/react";
const RegisterButton = ({ loading }) => {
    return (
        <Button
            type="submit"
            mt={4}
            colorScheme={"telegram"}
            isLoading={loading}
            variant={"solid"}
            ml={4}
        >
            Register
        </Button>
    )
}
export default RegisterButton;