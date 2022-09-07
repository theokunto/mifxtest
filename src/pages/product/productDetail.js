import { Box, Button, Container, Flex, GridItem, Image } from "@chakra-ui/react";
import { useState } from "react";
import { MdAddShoppingCart, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewsCount from "../../components/common/reviewsCount/reviewsCount";
import StarRating from "../../components/common/starRating/startRating";
import MainLayout from "../../components/layouts/main";

const ProductDetail = () => {
    const dataproduct = useSelector(state => state.productList.productList)
    const idProduct = useParams();
    const detaildata = dataproduct.find(item => item.id === idProduct.id);
    const images = detaildata.images
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    return (
        <MainLayout>
            <Container maxW={"container.lg"} height={'container.lg'} p={8} borderWidth="thin" boxShadow={'2xl'}>
                <Flex direction={'row'} justifyContent={'space-around'}>
                    <Box>
                        <Flex
                            direction={"row"}
                            alignItems={"center"}
                            position={"absolute"}
                            justifyContent={"flex-end"}
                            zIndex={2}
                            w={390}
                            top={510}
                        >
                            <MdChevronLeft size={24}
                                onClick={(e) => {
                                    selectedImageIndex === 0 ? e.preventDefault() :
                                        setSelectedImageIndex(selectedImageIndex - 1)
                                }}
                                cursor={'pointer'}
                            />
                            <Box>
                                <p>{selectedImageIndex + 1} / {images.length}</p>
                            </Box>
                            <MdChevronRight size={24}
                                onClick={(e) => {
                                    selectedImageIndex === images.length - 1 ? e.preventDefault() :
                                        setSelectedImageIndex(selectedImageIndex + 1)
                                }}
                                cursor={'pointer'}
                            />
                        </Flex>
                        <Container maxW={400} p={0} m={0} borderRadius={12}
                            borderWidth={'thin'}>
                            <Image
                                borderRadius={12}
                                maxW={400}
                                src={images[selectedImageIndex]}
                                alt={`bigimage${selectedImageIndex}`}
                                fallbackSrc='https://i.pinimg.com/originals/a3/1d/4a/a31d4ac1da27d5a9b39bcef3499d7215.jpg'
                            />
                        </Container>
                        <Container maxW={400} p={0} mt={6} ml={0} centerContent>

                            <Flex direction={'row'} >
                                {images.map((item, index) => (
                                    <GridItem
                                        key={index}
                                        borderRadius={8}
                                        borderWidth={index === selectedImageIndex ? 'thick' : 'thin'}
                                        borderColor={index === selectedImageIndex ? 'orange' : '#ddd'}
                                        m={1}
                                        onClick={() => {
                                            setSelectedImageIndex(index)
                                        }}
                                        cursor={'pointer'}
                                    >
                                        <Image
                                            w={14}
                                            src={item}
                                            alt={`image${index}`}
                                            fallbackSrc='https://i.pinimg.com/originals/a3/1d/4a/a31d4ac1da27d5a9b39bcef3499d7215.jpg'
                                        />
                                    </GridItem>

                                ))}
                            </Flex>
                        </Container>
                    </Box>
                    <Box maxW={'container.md'}>
                        <Box>
                            {detaildata?.off !== "" ?
                                <p style={{ color: 'red', fontWeight: 'bold', fontSize: 12 }} >
                                    SALE</p>
                                : <></>}

                        </Box>
                        <Box
                            mt='1'
                            fontWeight='bold'
                            as='h5'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            {detaildata?.name}
                        </Box>
                        <Flex direction={'row'} alignItems={"center"} mt={2}>
                            <StarRating rating={detaildata?.rating} />
                            <ReviewsCount reviewCount={detaildata?.reviewCount} />
                        </Flex>
                        <Box
                            mt='1'
                            fontWeight='bold'
                            as='h3'
                            lineHeight='tight'
                            noOfLines={1}
                            fontSize={24}
                        >
                            {detaildata?.price}
                        </Box>
                        <Box mt={4}>
                            <hr />
                        </Box>
                        <Flex
                            w={240}
                            mt={4}
                            justifyContent={'space-around'}
                        >
                            <Button
                                backgroundColor={"#efc45c"}
                                color={'#2e3235'}
                                size={'sm'}
                                leftIcon={<MdAddShoppingCart />}
                            >
                                Add To Chart
                            </Button>
                            <Button
                                backgroundColor={"#65a666"}
                                color={'#fff'}
                                size={'sm'}
                            >
                                Buy Now
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </MainLayout>
    )
}
export default ProductDetail;