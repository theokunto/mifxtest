import { Box, Container } from "@chakra-ui/react";

const MainLayout = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Container maxW={"container.xl"} pt={14}>
                {children}
            </Container>
        </Box>
    )
};

export default MainLayout;
