import { Center, Container, Flex } from "@chakra-ui/react";

const AuthLayout = ({ children }) => {
    return (
        <Flex as="main" pb={8} alignItems="center" justifyContent={"center"} h="100vh">
            <Container maxW={"container.xl"}>
                <Center>
                    {children}
                </Center>
            </Container>
        </Flex>
    )
};

export default AuthLayout;
