import { Badge, Box, Image } from "@chakra-ui/react";
import ReviewsCount from "../reviewsCount/reviewsCount";
import StarRating from "../starRating/startRating";
const ListingProductCard = ({ image, name, price, off, rating, isNew, out_of_stock, reviewCount, sizes }) => {

    return name && 
        <Box
            maxW={'100%'}
            borderWidth={"1px"}
            borderRadius={"lg"}
            overflow={"hidden"}
        >
            <Image
                src={image}
                alt={name}
                objectFit={"cover"}
                
                fallbackSrc={'https://i.pinimg.com/originals/a3/1d/4a/a31d4ac1da27d5a9b39bcef3499d7215.jpg'}
            />
            <Box p={6}>
                <Box
                    display={"flex"}
                    alignItems={"baseline"}
                >
                    {isNew !== "" ?
                        <Badge
                            borderRadius={"full"}
                            px={2}
                            colorScheme={"green"}
                        >
                            New
                        </Badge>
                        : <></>}
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        size {sizes.map(
                            (item, index) =>
                                index !== sizes.length - 1 ?
                                    `${item}, ` : `${item}`
                        )}
                    </Box>
                </Box>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {name}
                </Box>
                <Box>
                    {price}
                    <Box as='span' color='red' fontSize='sm' ml={2}>
                        {off}
                    </Box>
                </Box>
                <Box display='flex' mt='2' alignItems='center'>
                    <StarRating rating={rating} />
                    <ReviewsCount reviewCount={reviewCount}/>
                </Box>
            </Box>
        </Box>
}

export default ListingProductCard;