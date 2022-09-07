import { Box, Center, Container, Flex, Spacer, useToast } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/authSlice";
import { cleanProductList, setProductListView } from "../redux/productSlice";
import SearchBar from "./common/searchBar";

const NavBar = () => {
    const userName = useSelector(state => state.auth.userName)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toast = useToast()
    const location = useLocation()
    async function logouting() {
        dispatch(cleanProductList())
        dispatch(setLogout())
        toast({
            title: "Logout success",
            description: 'Logouted, we will redirect you to login page',
            position: "top-right",
            isClosable: true,
            duration: 5000,
            status: "success"

        })
    }
    function logout() {
        logouting()
            .then(() =>
                setTimeout(() => {
                    navigate('/login')
                }, 5000)
            )
    }
    return (
        <Box m={0}>
            <Container
                maxW={"container.xl"}
                mb={2}
                pt={4}
                pl={0}
                pr={0}>
                <Flex direction={'row'}>
                    <Spacer />
                    <p style={{ color: "#fff", fontSize: 12 }}>
                        {`${userName} | `}
                        <span
                            style={{ fontWeight: 'bold',cursor:'pointer' }}
                            onClick={() => logout()}
                            
                        >
                            Logout
                        </span>
                    </p>
                </Flex>
            </Container>
            {location.pathname.includes("detail-product") ?
                <Container
                    maxW={100}
                    p={0}
                    h={10}
                    m={0}
                    >
                    <Link to="/home">
                        <IconContext.Provider
                            value={{ color: '#fff' }}
                        >
                            <MdArrowBack size={42} />
                        </IconContext.Provider>
                    </Link>
                </Container>
                :
                <Container
                    maxW={"container.xl"}
                    p={0}
                    h={10}
                >
                    <Center>
                        <SearchBar onSearch={(value) => {
                            dispatch(setProductListView(value))
                        }} />
                    </Center>
                </Container>
            }
        </Box>
    )
}
export default NavBar;