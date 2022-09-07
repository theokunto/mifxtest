import { Box, Container } from "@chakra-ui/react";
import NavBar from "../navBar";

const MainLayout = ({ children }) => {
    return (
        <Box as="main" p={0}>
            <Container
                maxW={'100vw'}
                backgroundColor={"#ff6a00"}
                pb={8}
            >
                <NavBar />
            </Container>
            {children}
        </Box>
    )
};

export default MainLayout;
