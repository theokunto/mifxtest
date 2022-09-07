/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid, GridItem, LinkBox, LinkOverlay, Spinner, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Category from "../../components/categories/categories"
import ListingProductCard from "../../components/common/cards/listingProductCard"
import { hitApi } from "../../helpers/hitApi"
import { setProductList, setProductListView } from "../../redux/productSlice"
import { PRODUCT_LIST_URL } from "../../variables/urls"
const MainProductList = () => {
    const dispatch = useDispatch()
    const toast = useToast()
    let productListView = useSelector(state => state.productList.productListView)
    const [isLoading, setIsLoading] = useState()
    const [windowWidth, setWindowWidth] = useState(0)
    window.addEventListener("resize", function () {
        setWindowWidth(window.innerWidth)
    });
    useEffect(() => {
        getProductList()
    }, [])
    function getProductList() {
        setIsLoading(true)
        hitApi.get(PRODUCT_LIST_URL)
            .then((result) => {
                dispatch(setProductList(result.data))
                dispatch(setProductListView())
                setIsLoading(false)
            }).catch((error) => {
                toast({
                    title: "Error",
                    description: error.response.data,
                    position: "top-right",
                    isClosable: true,
                    duration: 5000,
                    status: "error"
                })
                setIsLoading(false)
            })
    }
    function columnsHelper(windowWidth) {
        return windowWidth > 1024 ?
            5 : windowWidth > 768 ? 4 : 3
    }
    return (
        <>
            <Category />
            <Container maxW={"container.xl"} p={8}>
                <Container ml={0} p={0} mb={4}>
                    <h2 style={{ fontWeight: '500' }}>Recomendation</h2>
                </Container>
                <Grid templateColumns={`repeat(${columnsHelper(windowWidth)}, 1fr)`} gap={4}>
                    {isLoading ?
                        <Container mt={4}>
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </Container>
                        : productListView !== undefined ?
                            productListView?.map((item, index) => (
                                <LinkBox as="article" key={`gridItem${item?.name}${index}`}>
                                    <GridItem>
                                        <LinkOverlay href={`/detail-product/${item?.id}`}>
                                            <ListingProductCard
                                                key={`${item?.name}${index}`}
                                                image={item?.image}
                                                name={item?.name}
                                                price={item?.price}
                                                off={item?.off}
                                                rating={item?.rating}
                                                isNew={item?.isNew}
                                                out_of_stock={item?.out_of_stock}
                                                reviewCount={item?.reviewCount}
                                                sizes={item?.sizes}
                                            />
                                        </LinkOverlay>
                                    </GridItem>
                                </LinkBox>
                            ))
                            : <></>
                    }
                </Grid>
            </Container>
        </>
    )
}

export default MainProductList