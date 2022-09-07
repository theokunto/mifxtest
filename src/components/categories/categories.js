/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Container, Flex, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hitApi } from "../../helpers/hitApi";
import { setCategoryList } from "../../redux/productSlice";
import { CATEGORY_LIST_URL } from "../../variables/urls";

const Category = () => {
    const dispatch = useDispatch()
    const categoryList = useSelector(state => state.productList.categoryList)
    const toast = useToast()
    useEffect(() => {
        getCategoryList()
    }, [])
    function getCategoryList() {
        hitApi.get(CATEGORY_LIST_URL)
            .then((result) => {
                dispatch(setCategoryList(result.data))
            }).catch((error) => {
                toast({
                    title: "Error",
                    description: error.response.data,
                    position: "top-right",
                    isClosable: true,
                    duration: 5000,
                    status: "error"
                })
            })
    }
    return (
        <Container maxW={"container.xl"} p={8}>
            <Container ml={0} mt={4} p={0}>
                <h2 style={{ fontWeight: '500' }}>Categories</h2>
            </Container>
            <Flex direction={'row'}>
                {categoryList && categoryList.map((item, index) => (
                    <Badge borderRadius={'full'} ml={index === 0 ? 0 : 4} mt={4} key={index}>
                        <p>{item?.name}</p>
                    </Badge>
                ))}
            </Flex>
        </Container>
    )
};

export default Category;